import { FC } from 'react';
import Form from '../components/form/form';
import FormCardsBlock from '../components/formCard/formCardsBlock';

const FormPage: FC = () => {
  return (
    <div className="form-page">
      <p className="form-description">
        Fill the form below for recieve information about free apartment
      </p>
      <Form />
      <FormCardsBlock />
    </div>
  );
};

export default FormPage;
