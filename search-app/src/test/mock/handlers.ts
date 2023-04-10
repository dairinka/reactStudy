import { rest } from 'msw';

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    const name = req.url.searchParams.get('name');

    if (name === 'super') {
      return res(ctx.status(404));
    } else if (name === 'aloha') {
      return res(
        ctx.status(200),
        ctx.json({
          info: {
            count: 1,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [
            {
              id: 2,
              name: 'Aloha',
              status: 'Alive',
              species: 'human',
              type: 'human',
              gender: 'male',
              origin: {
                name: 'Earth',
                url: 'http://earth.com/aloha',
              },
              location: {
                name: 'Earth',
                url: 'http://earth.com/aloha',
              },
              image: './cake.png',
              episode: ['https://rickandmortyapi.com/api/episode/8'],
              url: 'http://earth.com/aloha',
              created: '02.03.2003',
            },
          ],
        })
      );
    } else if (!name) {
      return res(
        ctx.status(200),
        ctx.json({
          info: {
            count: 2,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [
            {
              id: 2,
              name: 'Aloha',
              status: 'Alive',
              species: 'human',
              type: 'human',
              gender: 'male',
              origin: {
                name: 'Earth',
                url: 'http://earth.com/aloha',
              },
              location: {
                name: 'Earth',
                url: 'http://earth.com/aloha',
              },
              image: './cake.png',
              episode: [
                'https://rickandmortyapi.com/api/episode/8',
                'https://rickandmortyapi.com/api/episode/8',
              ],
              url: 'http://earth.com/aloha',
              created: '02.03.2003',
            },
            {
              id: 3,
              name: 'Testy',
              status: 'Dead',
              species: 'animal',
              type: 'animal with ear',
              gender: 'male',
              origin: {
                name: 'NonEarth',
                url: 'http://nonearth.com/animal',
              },
              location: {
                name: 'NonEarth',
                url: 'http://nonearth.com/animal',
              },
              image: 'http://nonearth.com/image',
              episode: ['http://nonearth.com/episode1', 'http://nonearth.com/episode2'],
              url: 'http://nonearth.com/animala',
              created: '09.12.2001',
            },
          ],
        })
      );
    }
  }),
  rest.get('https://rickandmortyapi.com/api/character/3', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 3,
        name: 'Summer Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Female',
        origin: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        location: {
          name: 'Earth',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/8'],
        url: 'https://rickandmortyapi.com/api/character/3',
        created: '2017-11-04T19:09:56.428Z',
      })
    );
  }),
  rest.get('https://rickandmortyapi.com/api/episode/8', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 123,
        name: 'Rick Potion #9',
        air_date: '22.05.2019',
        episode: 'S01E01',
        characters: [
          'https://rickandmortyapi.com/api/character/1',
          'https://rickandmortyapi.com/api/character/2',
        ],
        url: 'https://episode8.com',
        created: '20.05.2022',
      })
    );
  }),
];
