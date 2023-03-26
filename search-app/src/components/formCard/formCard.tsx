import * as React from 'react';
import { FormCardData } from '../../types/type';

export interface IFormCardProps {
  data: FormCardData;
}

export default class FormCard extends React.Component<IFormCardProps> {
  public render() {
    return (
      <div className="form-card">
        <p className="user-name card-line">
          <span className="first-word">Name: </span>
          {this.props.data.name}
        </p>
        <p className="user-email card-line">
          <span className="first-word">Email: </span>
          {this.props.data.email}
        </p>
        <p className="user-state card-line">
          <span className="first-word">State traveling: </span>
          {this.props.data.state}
        </p>
        <p className="rental-date card-line">
          <span className="first-word">Start renting: </span>
          {JSON.stringify(this.props.data.startDate)}
        </p>
        <p className="rental-city card-line">
          <span className="first-word">Chose city: </span>
          {this.props.data.city}
        </p>
        <p className="rental-max-price card-line">
          <span className="first-word">Max price: </span>
          {this.props.data.maxPrice}
        </p>
        <p className="user-pet card-line">
          <span className="first-word">Has pet: </span>
          {this.props.data.pets ? 'yes' : 'no'}
        </p>
        <div className="user-passport">
          <p className="first-word card-line">User passport:</p>
          {this.props.data.file ? (
            <img src={URL.createObjectURL(this.props.data.file)} style={{ height: 200 }} />
          ) : null}
        </div>
      </div>
    );
  }
}
