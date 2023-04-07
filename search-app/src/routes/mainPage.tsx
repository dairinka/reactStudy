import { FC, useState, useEffect } from 'react';

import { IServerDataResult, LocalStoradgeType } from '../types/type';
import TableCards from '../components/tableCards';
import Search from '../components/search';
import connectServer from '../components/function/connectServer';

const MainPage: FC = () => {
  const initialQuery = localStorage.getItem(LocalStoradgeType.querySearch)
    ? JSON.parse(localStorage.getItem(LocalStoradgeType.querySearch) as string)
    : '';
  const [serverData, setServerData] = useState<IServerDataResult[]>([]);
  const [query, setQuery] = useState(initialQuery);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    connectServer(0, query).then((data) => {
      setServerData(data);
      setIsPending(false);
    });
  }, [query]);

  const handleChangeList = async (str: string) => {
    const strNormalize = str.toLowerCase().trim();
    setQuery(strNormalize);
  };

  return (
    <>
      <Search changeList={handleChangeList} />
      {isPending && <div className="load">Progressing...</div>}
      {serverData && <TableCards data={serverData} />}
      {!serverData && !isPending && (
        <div className="search-result">No character found. Try another query</div>
      )}
    </>
  );
};

export default MainPage;
