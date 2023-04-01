import { FC } from 'react';

export interface IButtonProps {
  buttonName: string;
  type: 'button' | 'submit' | 'reset';
}

const Button: FC<IButtonProps> = ({ buttonName, type }) => {
  return (
    <button type={type} className="form-btn">
      {buttonName}
    </button>
  );
};

export default Button;
