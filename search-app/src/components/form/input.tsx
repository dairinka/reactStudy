import { FC } from 'react';
import { UseFormRegister, Path, FieldErrors } from 'react-hook-form';
import { FormFields } from './form';
import ErrorFormMessage from './message/errorFormMessage';

export type InputType = 'text' | 'email' | 'password' | 'checkbox' | 'date';

export interface IInputProps {
  type: InputType;
  labelName: string;
  placeholder?: string;
  default?: string;
  name: Path<FormFields>;
  errors: FieldErrors<FormFields>;
  register: UseFormRegister<FormFields>;
  rules?: {
    required: boolean;
    errorMessage?: string;
  };
}

const Input: FC<IInputProps> = ({
  name,
  type,
  labelName,
  placeholder,
  errors,
  register,
  rules,
}) => {
  return (
    <div className="form-block">
      <label htmlFor={'user-' + labelName.split(' ')[1]} className="input-label form-label">
        {labelName}
      </label>
      <input
        type={type}
        id={'user-' + labelName.split(' ')[1]}
        placeholder={placeholder}
        className="input-text form-input"
        {...register(name, { required: rules?.required ? rules.errorMessage : false })}
      />
      {errors[name] && <ErrorFormMessage message={errors[name]?.message as string} />}
    </div>
  );
};

export default Input;
