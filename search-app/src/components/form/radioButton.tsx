import { FC } from 'react';
import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';
import { FormFields } from '../../types/type';
import ErrorFormMessage from './message/errorFormMessage';

interface IRadioBtnProps {
  errors: FieldErrors<FormFields>;
  register: UseFormRegisterReturn<'state'>;
}
const RadioButton: FC<IRadioBtnProps> = ({ register, errors }) => {
  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Please select you will travel:</legend>
        <div className="radio-block">
          <input type="radio" id="state1" value="sigle" {...register} />
          <label htmlFor="state1">Single</label>

          <input type="radio" id="state2" value="family" {...register} />
          <label htmlFor="state2">With family</label>

          <input type="radio" id="state3" value="friends" {...register} />
          <label htmlFor="state3">With friends</label>
        </div>
      </fieldset>
      {errors.state && <ErrorFormMessage message={errors.state.message as string} />}
    </>
  );
};

export default RadioButton;
