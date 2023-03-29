import React, { FC } from 'react';
import { ApartmentData } from '../types/type';
import Card from './card';

interface ITableCards {
  data: ApartmentData[];
}

const TableCards: FC<ITableCards> = ({ data }) => {
  return (
    <>
      <div className="search-result">
        <p id="amount-result">
          {data.length ? `Found ${data.length} apartments` : 'Not found. Try another query'}
        </p>
      </div>
      <div className="content-wrapper">
        {data.map((el: ApartmentData) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </>
  );
};

export default TableCards;
