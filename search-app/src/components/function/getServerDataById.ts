import { IServerDataResultPlus, IServerDataResult, IServerDataEpisode } from 'types/type';

export const getServerDataById = async (id: number): Promise<IServerDataResult> => {
  const currentUrl = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(currentUrl);
  const dataCard = (await response.json()) as IServerDataResult;
  return dataCard;
};

export const getFullDataById = async (data: IServerDataResult): Promise<IServerDataResultPlus> => {
  const urlFirstEpisode = data.episode[0];
  const urlLastEpisode = data.episode[data.episode.length - 1];
  const responseFirstEpisode = await fetch(urlFirstEpisode);
  const dataFirstEpisode = (await responseFirstEpisode.json()) as IServerDataEpisode;
  const firstEpisodeName = dataFirstEpisode.name;
  const responseLastEpisode = await fetch(urlLastEpisode);
  const dataLastEpisode = (await responseLastEpisode.json()) as IServerDataEpisode;
  const lastEpisodeName = dataLastEpisode.name;
  return Object.assign(data, {
    name_first_episode: firstEpisodeName,
    name_last_episode: lastEpisodeName,
  });
};
