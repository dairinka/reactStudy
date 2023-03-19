import React from 'react';

import { ApartmentData } from '../types/type';
import TableCards from '../components/tableCards';
import Search from '../components/search';
import cardData from '../data/data';
import Header from '../components/header';

type CardState = { query: string };

export default class MainPage extends React.Component<object, CardState> {
  constructor(props: React.ReactPropTypes) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleChangeList = (str: string): void => {
    const strNormalize = str.toLowerCase().trim();
    this.setState({ query: strNormalize });
  };

  searchApartment = (data: ApartmentData[]): ApartmentData[] => {
    return data.filter(
      (el: ApartmentData) =>
        el.name.toLowerCase().includes(this.state.query) ||
        el.city.toLowerCase().includes(this.state.query) ||
        el.language.join(' ').toLowerCase().includes(this.state.query) ||
        el.comfortable.join(' ').toLowerCase().includes(this.state.query)
    );
  };

  render() {
    return (
      <>
        <Header />
        <Search changeList={this.handleChangeList} />
        <TableCards data={this.searchApartment(cardData)} />
      </>
    );
  }
}
