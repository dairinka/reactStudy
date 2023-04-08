import { FC, useState, useEffect, useRef } from 'react';

import { IServerDataResult, LocalStoradgeType } from '../types/type';
import { IServerDataResultPlus } from '../types/type';
import TableCards from '../components/tableCards';
import Search from '../components/search';
import connectServer from '../components/function/connectServer';
import ModalCard from '../components/modalCard';
import getServerDataById from '../components/function/getServerDataById';

const MainPage: FC = () => {
  const initialQuery = localStorage.getItem(LocalStoradgeType.querySearch)
    ? JSON.parse(localStorage.getItem(LocalStoradgeType.querySearch) as string)
    : '';
  const [serverData, setServerData] = useState<IServerDataResult[]>([]);
  const [query, setQuery] = useState(initialQuery);
  const [isPending, setIsPending] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const serverOneCardDataRef = useRef<IServerDataResultPlus>();

  useEffect(() => {
    setIsPending(true);
    connectServer(query).then((data) => {
      const currentData = data as IServerDataResult[];
      setServerData(currentData);
      setIsPending(false);
    });
  }, [query]);

  const handleChangeList = async (str: string) => {
    const strNormalize = str.toLowerCase().trim();
    setQuery(strNormalize);
  };

  const handleShowModal = async (bool: boolean, id: number) => {
    const fullData = await getServerDataById(id);
    serverOneCardDataRef.current = fullData;
    setShowModal(bool);
  };

  const handleCloseModal = (bool: boolean) => {
    setShowModal(bool);
  };

  return (
    <>
      <Search changeList={handleChangeList} />
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
