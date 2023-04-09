import { IServerData, IServerDataResult } from 'types/type';

export const fakeDataById: IServerDataResult = {
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
  image: 'http://earth.com/image',
  episode: ['http://earth.com/episode1', 'http://earth.com/episode2'],
  url: 'http://earth.com/aloha',
  created: '02.03.2003',
};

export const fakeData: IServerDataResult[] = [
  fakeDataById,
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
];

export const fakeServerData: IServerData = {
  info: {
    count: 2,
    pages: 1,
    next: null,
    prev: null,
  },
  results: fakeData,
};
