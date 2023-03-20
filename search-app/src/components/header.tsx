import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Location from './location';

export default class Header extends React.Component {
  public render() {
    return (
      <header className="header">
        <NavLink to={'/'} className="header-link">
          Search Apartment
        </NavLink>
        <NavLink to={'/about_us'} className="header-link">
          About Us
        </NavLink>
        <Location />
      </header>
    );
  }
}
