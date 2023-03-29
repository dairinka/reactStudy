import { FC, useState } from 'react';

import { ApartmentData } from '../types/type';
import TableCards from '../components/tableCards';
import Search from '../components/search';
import cardData from '../data/data';

const MainPage: FC = () => {
  const [query, setQuery] = useState('');
  const handleChangeList = (str: string): void => {
    const strNormalize = str.toLowerCase().trim();
    setQuery(strNormalize);
  };

  const searchApartment = (data: ApartmentData[]): ApartmentData[] => {
    return data.filter(
      (el: ApartmentData) =>
        el.name.toLowerCase().includes(query) ||
        el.city.toLowerCase().includes(query) ||
        el.language.join(' ').toLowerCase().includes(query) ||
        el.comfortable.join(' ').toLowerCase().includes(query)
    );
  };

  return (
    <>
      <Search changeList={handleChangeList} />
      <TableCards data={searchApartment(cardData)} />
    </>
  );
};

export default MainPage;
