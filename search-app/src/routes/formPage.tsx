import { FC, useState } from 'react';
import cardData from '../data/data';
import { FormCardData } from '../types/type';
import Form from '../components/form/form';
import FormCardsBlock from '../components/formCard/formCardsBlock';

const FormPage: FC = () => {
  const [arrayCards, setArrayCards] = useState<FormCardData[]>([]);
  const handleFormCardData = (newArray: FormCardData) => {
    setArrayCards((prev) => [...prev, newArray]);
  };

  return (
    <div className="form-page">
      <p className="form-description">
        Fill the form below for recieve information about free apartment
      </p>
      <Form dataList={cardData} showCard={handleFormCardData} />
      {arrayCards.length ? <FormCardsBlock data={arrayCards} /> : null}
    </div>
  );
};

export default FormPage;
