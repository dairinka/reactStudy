import fs from 'node:fs/promises';
import express from 'express';
import { Request, Response } from 'express';
import { ViteDevServer } from 'vite';
import { createServer } from 'vite';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;
const base = process.env.BASE || '/';
const isTest = process.env.VITEST;

const templateHtml = isProduction ? await fs.readFile('../dist/client/index.html', 'utf-8') : '';

async function createViteServer() {
  const app = express();

  let vite: ViteDevServer;
  if (!isProduction) {
    vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
      base,
    });
    app.use(vite.middlewares);
  } else {
    const compression = (await import('compression')).default;
    const sirv = (await import('sirv')).default;
    app.use(compression());
    app.use(base, sirv('../dist/client', { extensions: [] }));
  }

  app.use('*', async (req: Request, res: Response) => {
    try {
      const url = req.originalUrl.replace(base, '');

      let template;
      let render;
      if (!isProduction) {
        template = await fs.readFile('./index.html', 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('src/entry-server.tsx')).render;
      } else {
        template = templateHtml;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        render = (await import('../dist/server/entry-server.js')).render;
      }

      const [start, end] = template.split(`<!--app-html-->`);

      const { pipe } = render(url, {
        onShellReady() {
          res.write(start);
          pipe(res);
        },
        onAllReady() {
          res.write(end);
          res.end();
        },
      });
    } catch (e) {
      const err = e as Error;
      vite?.ssrFixStacktrace(err);
      res.status(500).end(err.stack);
    }
  });

  return { app };
}

if (!isTest) {
  createViteServer()
    .then(({ app }) =>
      app.listen(3000, () => {
        console.log(`http://localhost:${port}`);
      })
    )
    .catch((e) => console.error(e));
}
