import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hook';
import { addSearchQuery, addValue } from '../store/searchSlice';

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.search.value);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
