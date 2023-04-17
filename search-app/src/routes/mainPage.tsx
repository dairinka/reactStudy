import { FC } from 'react';
import TableCards from '../components/tableCards';
import Search from '../components/search';

const MainPage: FC = () => {
  return (
    <>
      <Search />
      <TableCards />
    </>
  );
};

export default MainPage;
