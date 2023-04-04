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

export interface FormCardData {
  id?: number;
  name?: string;
  email?: string;
  state?: StateType;
  pets?: boolean;
  city?: string;
  maxPrice?: string;
  startDate?: string;
  file?: File | Blob;
}
export type StringBoolean = 'false' | 'true';
export type StateType = 'single' | 'with family' | 'with friends' | '';
