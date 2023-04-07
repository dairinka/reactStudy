import { IServerDataResult } from 'types/type';

const connectServer = async (id = 0, query = ''): Promise<IServerDataResult[]> => {
  const baseUrl = 'https://rickandmortyapi.com/api/character';
  if (query) {
    const currentUrl = `${baseUrl}/?page=1&name=${query}`;
    const response = await fetch(currentUrl);
    const data = await response.json();
    return data.results;
  } else {
    console.log('without query');
    const currentUrl = id ? `${baseUrl}/${id}` : `${baseUrl}/?page=1`;
    const response = await fetch(currentUrl, {
      credentials: 'same-origin',
    });
    const data = await response.json();
    return data.results;
  }
};

export default connectServer;
