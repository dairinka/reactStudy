import { FC } from 'react';
import { IServerDataResult } from '../types/type';
import { useAppSelector } from '../hook';
import { useGetCharactersQuery } from '../store/rickandmortyApi';
import Card from './card';

const TableCards: FC = () => {
  const searchQuery = useAppSelector((state) => state.search.query);
  const { isLoading, isFetching, isError, data } = useGetCharactersQuery(searchQuery);

  if (isFetching || isLoading) {
    return <div className="load">Progressing...</div>;
  }

  if (isError) {
    return (
      <div className="search-result">
        <p id="amount-result">Not found. Try another query</p>
      </div>
    );
  }

  return (
    <>
      <div className="search-result">
        <p id="amount-result">Found {data!.length} characters</p>
      </div>
      <div className="content-wrapper">
        {data &&
          data.map((el: IServerDataResult) => {
            return <Card key={el.id} data={el} />;
          })}
      </div>
    </>
  );
};

export default TableCards;
