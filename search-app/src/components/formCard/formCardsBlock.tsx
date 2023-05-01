import { FC } from 'react';
import FormCard from './formCard';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '../../hook';

const FormCardsBlock: FC = () => {
  const formData = useAppSelector((state) => state.form.data);

  return (
    <>
      {formData.length > 0 && <p className="form-card-desc">User info:</p>}
      <div className="form-card-wrapper">
        {formData.map((card) => (
          <FormCard data={card} key={uuidv4()} />
        ))}
      </div>
    </>
  );
};
export default FormCardsBlock;
