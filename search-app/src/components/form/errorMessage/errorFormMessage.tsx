import * as React from 'react';

export interface IErrorFormMessageProps {
  message: string;
  showError: boolean;
}

export default class ErrorFormMessage extends React.Component<IErrorFormMessageProps> {
  public render() {
    if (!this.props.showError) {
      return null;
    }
    return <p className="error-message">{this.props.message}</p>;
  }
}
