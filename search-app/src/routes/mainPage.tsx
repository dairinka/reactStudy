import { FC, useState, useEffect, useRef } from 'react';

import { IServerDataResult } from '../types/type';
import { IServerDataResultPlus } from '../types/type';
import TableCards from '../components/tableCards';
import Search from '../components/search';
import connectServer from '../components/function/connectServer';
import ModalCard from '../components/modalCard';
import { getServerDataById, getFullDataById } from '../components/function/getServerDataById';
import { useAppSelector } from '../hook';

const MainPage: FC = () => {
  const searchQuery = useAppSelector((state) => state.search.query);
  const [serverData, setServerData] = useState<IServerDataResult[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const serverOneCardDataRef = useRef<IServerDataResultPlus>();

  useEffect(() => {
    setIsPending(true);
    connectServer(searchQuery).then((data) => {
      const currentData = data as IServerDataResult[];
      setServerData(currentData);
      setIsPending(false);
    });
  }, [searchQuery]);

  const handleShowModal = async (bool: boolean, id: number) => {
    setIsPending(true);
    const cardData = await getServerDataById(id);
    const fullData = await getFullDataById(cardData);
    serverOneCardDataRef.current = fullData;
    setShowModal(bool);
    setIsPending(false);
  };

  const handleCloseModal = (bool: boolean) => {
    setShowModal(bool);
  };

  return (
    <>
      <Search />
      {isPending && <div className="load">Progressing...</div>}
      {serverData && <TableCards data={serverData} handleOnClick={handleShowModal} />}
      {!serverData && !isPending && (
        <div className="search-result">No character found. Try another query</div>
      )}
      {serverOneCardDataRef.current && (
        <ModalCard
          data={serverOneCardDataRef.current}
          isShowModal={showModal}
          handleOnClick={handleCloseModal}
        />
      )}
    </>
  );
};

export default MainPage;
