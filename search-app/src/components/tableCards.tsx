import { FC } from 'react';
import { IServerDataResult } from '../types/type';
import Card from './card';

interface ITableCards {
  data: IServerDataResult[];
  handleOnClick: (bool: boolean, id: number) => void;
}

const TableCards: FC<ITableCards> = ({ data, handleOnClick }) => {
  return (
    <>
      <div className="search-result">
        <p id="amount-result">
          {data ? `Found ${data.length} characters` : 'Not found. Try another query'}
        </p>
      </div>
      <div className="content-wrapper">
        {data &&
          data.map((el: IServerDataResult) => {
            return (
              <div
                className="click-wrapper"
                key={el.id}
                onClick={() => handleOnClick(true, el.id)}
                data-id={el.id}
              >
                <Card data={el} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TableCards;
