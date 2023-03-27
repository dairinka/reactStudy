import * as React from 'react';

export type InputType = 'text' | 'email' | 'password' | 'checkbox' | 'date';

export interface IInputProps {
  type: InputType;
  placeholder?: string;
  inputName: string;
  refer?: React.RefObject<HTMLInputElement>;
  default?: string;
}

export default class Input extends React.Component<IInputProps> {
  public render() {
    return (
      <div className="form-block">
        <label
          htmlFor={'user-' + this.props.inputName.split(' ')[1]}
          className="input-label form-label"
        >
          {this.props.inputName}
        </label>
        <input
          type={this.props.type}
          id={'user-' + this.props.inputName.split(' ')[1]}
          placeholder={this.props.placeholder}
          className="input-text form-input"
          name={this.props.type}
          ref={this.props.refer}
          defaultValue={this.props.default}
        />
      </div>
    );
  }
}
