import React, { Component } from 'react';
import { ApartmentData } from '../types/type';
import ComfortableList from './comfortableList';

interface ICardProps {
  data: ApartmentData;
}
export default class Card extends Component<ICardProps> {
  public render() {
    return (
      <div className="card">
        <div className="card__wrapper">
          <p className="card__city">{this.props.data.city}</p>
          <div className="card__img" style={{ backgroundImage: `url(${this.props.data.url})` }}>
            <span className="card__rates">{this.props.data.rates}</span>
          </div>
          <div className="name-wrapper">
            <p className="card__name">{this.props.data.name}</p>
            <span className="card__price">{this.props.data.price}</span>
          </div>
          <ComfortableList comfortableList={this.props.data.comfortable} />
          <p className="card__language">{this.props.data.language.join(', ')}</p>
        </div>
      </div>
    );
  }
}
