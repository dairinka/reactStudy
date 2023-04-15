import { FC } from 'react';
import { statusIcon } from '../types/type';
import { useAppDispatch, useAppSelector } from '../hook';
import { isShowModal } from '../store/searchSlice';
import { useGetEpisodeQuery, useGetPersonQuery } from '../store/rickandmortyApi';

const ModalCard: FC = () => {
  const isModal = useAppSelector((state) => state.search.isModal);
  const modalData = useAppSelector((state) => state.search.modalData);
  const dispatch = useAppDispatch();

  const { isLoading, isFetching, data } = useGetPersonQuery(modalData.id);
  const { isFetching: firstEpisodeFetching, data: nameFirstEpisode } = useGetEpisodeQuery(
    modalData.idFirstEpisode
  );
  const { isFetching: lastEpisodeFetching, data: nameLastEpisode } = useGetEpisodeQuery(
    modalData.idLastEpisode
  );

  const closeModal = () => {
    dispatch(isShowModal(false));
  };

  if (isLoading || isFetching) {
    return <div className="modal-load">Progressing...</div>;
  }
  if (isModal && data) {
    return (
      <div className="environment" onClick={closeModal}>
        <div className="card-modal" onClick={(e) => e.stopPropagation()}>
          <p className="card-modal__title">
            <span className="card-modal__title-text">Character info</span>
            <span className="card-modal__close" onClick={closeModal}>
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
              <p className="card-modal__origin">
                {firstEpisodeFetching && 'Loading...'}
                {nameFirstEpisode && `${nameFirstEpisode}`}
              </p>
              <p className="card-modal__desc">Last seen in:</p>
              <p className="card-modal__origin">
                {lastEpisodeFetching && 'Loading...'}
                {nameLastEpisode && `${nameLastEpisode}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default ModalCard;
