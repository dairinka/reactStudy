import { FC } from 'react';
import { IServerDataResult } from '../types/type';

interface ICardProps {
  data: IServerDataResult;
}
const statusIcon = { Alive: '#55cc44', Dead: '#d63d2e', unknown: '#fe8f14' };

const Card: FC<ICardProps> = ({ data }) => {
  return (
    <div className="card">
      <div className="card__wrapper">
        <p className="card__status">
          <span
            className="card__status-icon"
            style={{ background: statusIcon[data.status] }}
          ></span>
          {data.status}
        </p>
        <div className="card__img" style={{ backgroundImage: `url(${data.image})` }}>
          <span className="card__gender">{data.gender}</span>
        </div>
        <div className="name-wrapper">
          <p className="card__name">{data.name}</p>
          <p className="card__type">
            {data.species}
            {data.type ? ' - ' + data.type : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
