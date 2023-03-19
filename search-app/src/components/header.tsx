import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  public render() {
    return (
      <header className="header">
        <NavLink to={'./'}>Search Apartment</NavLink>
        <NavLink to={'./about_us'}>About Us</NavLink>
      </header>
    );
  }
}
