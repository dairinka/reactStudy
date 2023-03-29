import { FC } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: FC = () => {
  return (
    <div className="error-block">
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
