import React, { FC } from 'react';
interface IComfortable {
  comfortableList: string[];
}

const ComfortableList: FC<IComfortable> = ({ comfortableList }) => {
  return <div className="comfort-list">{comfortableList.join(', ').slice(0, 120) + '...'}</div>;
};

export default ComfortableList;
