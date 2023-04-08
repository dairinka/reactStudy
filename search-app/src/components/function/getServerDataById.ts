import { IServerDataResultPlus, IServerDataResult, IServerDataEpisode } from 'types/type';

const getServerDataById = async (id: number): Promise<IServerDataResultPlus> => {
  const currentUrl = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(currentUrl);
  const dataCard = (await response.json()) as IServerDataResult;
  const urlFirstEpisode = dataCard.episode[0];
  const urlLastEpisode = dataCard.episode[dataCard.episode.length - 1];
  const responseFirstEpisode = await fetch(urlFirstEpisode);
  const dataFirstEpisode = (await responseFirstEpisode.json()) as IServerDataEpisode;
  const firstEpisodeName = dataFirstEpisode.name || 'unknown';
  const responseLastEpisode = await fetch(urlLastEpisode);
  const dataLastEpisode = (await responseLastEpisode.json()) as IServerDataEpisode;
  const lastEpisodeName = dataLastEpisode.name || 'unknown';
  return Object.assign(dataCard, {
    name_first_episode: firstEpisodeName,
    name_last_episode: lastEpisodeName,
  });
};

export default getServerDataById;
