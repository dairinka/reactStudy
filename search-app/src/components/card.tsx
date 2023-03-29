import React, { FC } from 'react';
import { ApartmentData } from '../types/type';
import ComfortableList from './comfortableList';

interface ICardProps {
  data: ApartmentData;
}
const Card: FC<ICardProps> = ({ data }) => {
  return (
    <div className="card">
      <div className="card__wrapper">
        <p className="card__city">{data.city}</p>
        <div className="card__img" style={{ backgroundImage: `url(${data.url})` }}>
          <span className="card__rates">{data.rates}</span>
        </div>
        <div className="name-wrapper">
          <p className="card__name">{data.name}</p>
          <span className="card__price">{data.price}</span>
        </div>
        <ComfortableList comfortableList={data.comfortable} />
        <p className="card__language">{data.language.join(', ')}</p>
      </div>
    </div>
  );
};

export default Card;
