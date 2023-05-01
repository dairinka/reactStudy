import { FC } from 'react';
import { IServerDataResult, statusIcon } from '../types/type';
import ModalCard from './modalCard';
import { useAppDispatch } from '../hook';
import { isShowModal, getModalData } from '../store/searchSlice';

interface ICardProps {
  data: IServerDataResult;
}

const Card: FC<ICardProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  const showModal = (id: number, firstEpisodeUrl: string, lastEpisodeUrl: string) => {
    const getIdFromUrl = (url: string) => url.split('/').pop();
    const idFirstEpisode = getIdFromUrl(firstEpisodeUrl) as string;
    const idLastEpisode = getIdFromUrl(lastEpisodeUrl) as string;

    dispatch(isShowModal(true));
    dispatch(
      getModalData({
        id: String(id),
        idFirstEpisode,
        idLastEpisode,
      })
    );
  };
  return (
    <>
      <div
        className="card"
        onClick={() => showModal(data.id, data.episode[0], data.episode[data.episode.length - 1])}
      >
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
      <ModalCard />
    </>
  );
};

export default Card;
