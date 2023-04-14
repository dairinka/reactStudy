import { FC } from 'react';
import { FormFields } from '../../types/type';

export interface IFormCardProps {
  data: FormFields;
}

const FormCard: FC<IFormCardProps> = ({ data }) => {
  return (
    <div className="form-card">
      <p className="user-name card-line">
        <span className="first-word">Name: </span>
        {data.userName}
      </p>
      <p className="user-email card-line">
        <span className="first-word">Email: </span>
        {data.email}
      </p>
      <p className="user-state card-line">
        <span className="first-word">State traveling: </span>
        {data.state}
      </p>
      <p className="rental-date card-line">
        <span className="first-word">Start renting: </span>
        {JSON.stringify(data.startDate)}
      </p>
      <p className="rental-city card-line">
        <span className="first-word">Chose city: </span>
        {data.city}
      </p>
      <p className="rental-max-price card-line">
        <span className="first-word">Max price: </span>
        {data.maxPrice}
      </p>
      <p className="user-pet card-line">
        <span className="first-word">Has pet: </span>
        {data.pets ? 'yes' : 'no'}
      </p>
      <div className="user-passport">
        <p className="first-word card-line">Passport:</p>
        {data.file ? <img src={data.file as string} style={{ height: 200 }} /> : null}
      </div>
    </div>
  );
};

export default FormCard;
