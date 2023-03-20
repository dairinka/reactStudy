import React, { Component } from 'react';
import { ApartmentData } from '../types/type';
import Card from './card';

interface ITableCards {
  data: ApartmentData[];
}

export default class TableCards extends Component<ITableCards> {
  public render() {
    return (
      <>
        <div className="search-result">
          <p>
            {this.props.data.length
              ? `Found ${this.props.data.length} apartments`
              : 'Not found. Try another query'}
          </p>
        </div>
        <div className="content-wrapper">
          {this.props.data.map((el: ApartmentData) => (
            <Card key={el.id} data={el} />
          ))}
        </div>
      </>
    );
  }
}
