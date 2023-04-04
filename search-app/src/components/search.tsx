import React, { FC, useState, useEffect } from 'react';
import { LocalStoradgeType } from '../types/type';

export interface ISearchProps {
  changeList: (str: string) => void;
}

const Search: FC<ISearchProps> = ({ changeList }) => {
  const initialState: string =
    JSON.parse(localStorage.getItem(LocalStoradgeType.querySearch) as string) || '';

  const [value, setValue] = useState(initialState);

  useEffect(() => {
    return () => {
      localStorage.setItem(LocalStoradgeType.querySearch, JSON.stringify(value));
    };
  }, [value]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    changeList(value);
  };

  return (
    <form className="search-bar">
      <input
        className="search-input"
        value={value}
        onChange={changeHandler}
        type="text"
        placeholder="search apartment"
      />
      <button className="search-btn" onClick={clickHandler} type="submit">
        Search
      </button>
    </form>
  );
};
export default Search;
