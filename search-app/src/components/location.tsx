import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default class Location extends React.Component {
  public render() {
    return (
      <div className="location">
        Now you are on
        <NavLink to={'/'}>SEARCH APARTMENT</NavLink>
        <NavLink to={'/about_us'}>ABOUT US</NavLink>
        page
      </div>
    );
  }
}
