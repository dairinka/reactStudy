export interface ApartmentData {
  readonly id: number;
  name: string;
  city: string;
  price: number;
  rates: string;
  url: string;
  comfortable: string[];
  language: string[];
}

export type ApartmentDataKey = keyof ApartmentData;

export enum LocalStoradgeType {
  querySearch = 'querySerch',
}

export interface PagePathData {
  pageName: string;
  pagePath: string;
  id: number;
}
export type FormFields = {
  city: string;
  userName: string;
  email: string;
  state: StateType;
  maxPrice: string;
  pets: boolean;
  startDate: string;
  file: FileList | string;
};
export type correctFormFields = {
  city: string;
  userName: string;
  email: string;
  state: StateType;
  maxPrice: string;
  pets: boolean;
  startDate: string;
  file: string;
};
// export interface FormCardData {
//   // id?: number;
//   // name?: string;
//   // email?: string;
//   // state?: StateType;
//   // pets?: boolean;
//   // city?: string;
//   // maxPrice?: string;
//   // startDate?: string;
//   file: string;
// }
export type StringBoolean = 'false' | 'true';
export type StateType = 'single' | 'with family' | 'with friends' | '';

export interface IServerData {
  info?: IServerDataInfo;
  results?: IServerDataResult[];
}

export interface IServerDataInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface IServerDataResult {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export const statusIcon = { Alive: '#55cc44', Dead: '#d63d2e', unknown: '#fe8f14' };

export interface IServerDataEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface IServerDataResultPlus extends IServerDataResult {
  name_first_episode: string;
  name_last_episode: string;
}
