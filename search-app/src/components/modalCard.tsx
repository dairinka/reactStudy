import { FC } from 'react';
import { IServerDataResultPlus, statusIcon } from '../types/type';

export interface IModalCardProps {
  data: IServerDataResultPlus;
  isShowModal: boolean;
  handleOnClick: (bool: boolean) => void;
}

const ModalCard: FC<IModalCardProps> = ({ data, isShowModal, handleOnClick }) => {
  if (!isShowModal) return null;
  return (
    <div className="environment" onClick={() => handleOnClick(false)}>
      <div className="card-modal" onClick={(e) => e.stopPropagation()}>
        <p className="card-modal__title">
          <span className="card-modal__title-text">Character info</span>
          <span className="card-modal__close" onClick={() => handleOnClick(false)}>
            X
          </span>
        </p>
        <div className="card-modal__wrapper" style={{ backgroundImage: `url(${data.image})` }}>
          <div className="card-modal__img"></div>
          <div className="card-modal__text-wrapper">
            <p className="card-modal__name">{data.name}</p>
            <p className="card-modal__status">
              <span
                className="card-modal__status-icon"
                style={{ background: statusIcon[data.status] }}
              ></span>
              {data.status.toLocaleLowerCase() + '::' + data.gender.toLocaleLowerCase()}
            </p>
            <p className="card-modal__type">
              {data.species}
              {data.type ? ' - ' + data.type : ''}
            </p>
            <p className="card-modal__desc">Last known location:</p>
            <p className="card-modal__origin">{data.origin.name}</p>
            <p className="card-modal__desc">First seen in:</p>
            <p className="card-modal__origin">{data.name_first_episode}</p>
            <p className="card-modal__desc">Last seen in:</p>
            <p className="card-modal__origin">{data.name_last_episode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
