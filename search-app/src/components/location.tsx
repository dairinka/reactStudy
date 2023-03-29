import React, { FC } from 'react';

interface ILocationProp {
  currentPage: string;
}
const Location: FC<ILocationProp> = ({ currentPage }) => {
  return <div className="location">You are on {currentPage} page</div>;
};

export default Location;
