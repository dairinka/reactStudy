import { FC } from 'react';
import { IServerDataResult } from '../types/type';
import Card from './card';

interface ITableCards {
  data: IServerDataResult[];
}

const TableCards: FC<ITableCards> = ({ data }) => {
  console.log('data in table cards ', data);
  return (
    <>
      <div className="search-result">
        <p id="amount-result">
          {data ? `Found ${data.length} characters` : 'Not found. Try another query'}
        </p>
      </div>
      <div className="content-wrapper">
        {data && data.map((el: IServerDataResult) => <Card key={el.id} data={el} />)}
      </div>
    </>
  );
};

export default TableCards;
