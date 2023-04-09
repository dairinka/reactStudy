import { rest } from 'msw';
import { fakeServerData } from './fakeData';
export const handler = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeServerData));
  }),
];
