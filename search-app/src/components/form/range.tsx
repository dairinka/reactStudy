import React, { FC } from 'react';
import { UseFormRegisterReturn, Path, FieldErrors } from 'react-hook-form';
import { FormFields } from './form';
import ErrorFormMessage from './message/errorFormMessage';

export interface IRangeProps {
  priceArray: string[];
  name: Path<FormFields>;
  errors: FieldErrors<FormFields>;
  register: UseFormRegisterReturn<'maxPrice'>;
}

const Range: FC<IRangeProps> = ({ priceArray, errors, register }) => {
  const defineMinMaxPrice = (): number[] => {
    const sortPriceArray: number[] = priceArray.map((el) => JSON.parse(el)).sort((a, b) => a - b);
    return [sortPriceArray[0], sortPriceArray[sortPriceArray.length - 1]];
  };

  const [min, max] = defineMinMaxPrice();
  return (
    <div className="range-price  form-block">
      <label htmlFor="range-price" className="input-label form-label">
        Choose max price
      </label>
      <div className="range-price__block">
        <span className="min-price range-price__amount">{min}</span>
        <span className="max-price range-price__amount">{max}</span>
        <input
          className="input-range form-input"
          type="range"
          min={min}
          max={max}
          id="range-price"
          step="1"
          defaultValue={max}
          {...register}
        />
      </div>
      {errors.maxPrice && <ErrorFormMessage message={errors.maxPrice.message as string} />}
    </div>
  );
};
export default Range;
