import { FC } from 'react';

export interface IErrorFormMessageProps {
  message: string;
}

const ErrorFormMessage: FC<IErrorFormMessageProps> = ({ message }) => {
  return <p className="error-message">{message}</p>;
};
export default ErrorFormMessage;
