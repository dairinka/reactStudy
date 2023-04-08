import { IServerDataResult } from 'types/type';

const connectServer = async (query = ''): Promise<IServerDataResult[] | IServerDataResult> => {
  const baseUrl = 'https://rickandmortyapi.com/api/character';
  if (query) {
    const currentUrl = `${baseUrl}/?page=1&name=${query}`;
    const response = await fetch(currentUrl);
    const data = await response.json();
    return data.results;
  } else {
    const currentUrl = `${baseUrl}/?page=1`;
    const response = await fetch(currentUrl, {
      credentials: 'same-origin',
    });
    const data = await response.json();
    return data.results;
  }
};

export default connectServer;
