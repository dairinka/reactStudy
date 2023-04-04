import React from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends React.Component {
  public render() {
    return (
      <div className="error-block">
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}
