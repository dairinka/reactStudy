import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hook';
//import { LocalStoradgeType } from '../types/type';
import { addSearchQuery, addValue } from '../store/searchSlice';

// export interface ISearchProps {
//   changeList: (str: string) => void;
// }

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.search.value);
  // const initialState: string =
  //   JSON.parse(localStorage.getItem(LocalStoradgeType.querySearch) as string) || '';

  // const [value, setValue] = useState(initialState);

  // useEffect(() => {
  //   return () => {
  //     localStorage.setItem(LocalStoradgeType.querySearch, JSON.stringify(value));
  //   };
  // }, [value]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setValue(e.target.value);
    dispatch(addValue(e.target.value));
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addSearchQuery(searchValue));
  };

  return (
    <form className="search-bar">
      <input
        className="search-input"
        value={searchValue}
        onChange={changeHandler}
        type="text"
        placeholder="search characters by name"
      />
      <button className="search-btn" onClick={clickHandler} type="submit">
        Search
      </button>
    </form>
  );
};
export default Search;
