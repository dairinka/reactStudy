import * as React from 'react';

export interface IButtonProps {
  buttonName: string;
  type: 'button' | 'submit' | 'reset';
}

export default class Button extends React.Component<IButtonProps> {
  public render() {
    return (
      <button type={this.props.type} className="form-btn">
        {this.props.buttonName}
      </button>
    );
  }
}
