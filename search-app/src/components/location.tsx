import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default class Location extends React.Component {
  public render() {
    return (
      <div className="location">
        Now you are on
        <NavLink to={'/'} className="header-link">
          Search Apartment
        </NavLink>
        <NavLink to={'/about_us'} className="header-link">
          About Us
        </NavLink>
        page
      </div>
    );
  }
}
