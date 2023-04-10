import '@testing-library/jest-dom';
import connectServer from '../connectServer';
import { IServerDataResult } from 'types/type';

test('get data correctly', async () => {
  const data = (await connectServer()) as IServerDataResult[];

  expect(data.length).toEqual(2);
  expect(data[0].name).toEqual('Aloha');
  expect(data[1].name).toEqual('Testy');
  expect(data[0].status).toEqual('Alive');
  expect(data[1].status).toEqual('Dead');
  expect(data[0].location.name).toEqual('Earth');
  expect(data[1].location.name).toEqual('NonEarth');
});

test('check searching by name', async () => {
  const data = (await connectServer('aloha')) as IServerDataResult[];

  expect(data[0].name).toEqual('Aloha');
  expect(data[0].status).toEqual('Alive');
  expect(data[0].location.name).toEqual('Earth');
});
