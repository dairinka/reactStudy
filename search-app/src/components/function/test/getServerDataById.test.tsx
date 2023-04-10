import { IServerDataResult } from '../../../types/type';
import { getServerDataById, getFullDataById } from '../getServerDataById';

test('get data correctly', async () => {
  const data = await getServerDataById(3);

  expect(data.name).toEqual('Summer Smith');
  expect(data.status).toEqual('Alive');
  expect(data.location.name).toEqual('Earth');
});

test('get full data correctly', async () => {
  const fakeData: IServerDataResult = {
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
  };
  const data = await getFullDataById(fakeData);

  expect(data.name).toEqual('Summer Smith');
  expect(data.status).toEqual('Alive');
  expect(data.location.name).toEqual('Earth');
  expect(data.name_first_episode).toEqual('Rick Potion #9');
  expect(data.name_last_episode).toEqual('Rick Potion #9');
});
