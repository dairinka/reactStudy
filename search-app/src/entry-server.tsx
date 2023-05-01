import React from 'react';
import { RenderToPipeableStreamOptions } from 'react-dom/server';
import { PipeableStream } from 'react-dom/server';
import { renderToPipeableStream } from 'react-dom/server';
import { Request } from 'express';
import App from './App';
import './main.css';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import store from './store';

export const render = (req: Request, options?: RenderToPipeableStreamOptions): PipeableStream => {
  const stream = renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={req.originalUrl}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    options
  );
  return stream;
};
