import { FC } from 'react';
import { UseFormRegisterReturn, Path, FieldErrors } from 'react-hook-form';
import { FormFields } from '../../types/type';
import ErrorFormMessage from './message/errorFormMessage';

export type SelectProps = {
  cityArray: string[];
  name: Path<FormFields>;
  errors: FieldErrors<FormFields>;
  register: UseFormRegisterReturn<'city'>;
};

const Select: FC<SelectProps> = ({ cityArray, errors, register }) => {
  return (
    <div className="select-block form-block">
      <label htmlFor="city-select" className="select-label form-label">
        Choose city
      </label>
      <select id="city-select" className="select" {...register}>
        <option value="">--Please choose the option--</option>

        {cityArray.map((city) => (
          <option key={JSON.parse(city)} value={JSON.parse(city)}>
            {JSON.parse(city)}
          </option>
        ))}

        <option value="all">All city</option>
      </select>
      {errors.city && <ErrorFormMessage message={errors.city.message as string} />}
    </div>
  );
};

export default Select;
