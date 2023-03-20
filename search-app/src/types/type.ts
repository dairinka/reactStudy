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

export enum LocalStoradgeType {
  querySearch = 'querySerch',
}
