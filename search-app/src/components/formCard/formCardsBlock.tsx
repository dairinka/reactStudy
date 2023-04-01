import { FC } from 'react';
import { FormCardData } from 'types/type';
import FormCard from './formCard';
import { v4 as uuidv4 } from 'uuid';

export interface IFormCardsBlockProps {
  data: FormCardData[];
}

const FormCardsBlock: FC<IFormCardsBlockProps> = ({ data }) => {
  return (
    <>
      <p className="form-card-desc">User info:</p>
      <div className="form-card-wrapper">
        {data.map((card) => (
          <FormCard data={card} key={uuidv4()} />
        ))}
      </div>
    </>
  );
};
export default FormCardsBlock;
