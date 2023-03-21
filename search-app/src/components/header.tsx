import React from 'react';
import { NavLink } from 'react-router-dom';
import Location from './location';

type pageState = { pageName: string };
export default class Header extends React.Component<object, pageState> {
  constructor(props: object) {
    super(props);
    this.state = {
      pageName: this.defineLocation(),
    };
  }

  defineLocation = (): string => {
    console.log('location path: ', window.location.pathname);
    return window.location.pathname === '/'
      ? 'HOME'
      : window.location.pathname.slice(1).toUpperCase().replace(/_/, ' ');
  };

  changePage = (currentPageName: string) => {
    const pageNameUpperCase = currentPageName.toUpperCase();
    this.setState({ pageName: pageNameUpperCase });
  };

  public render() {
    return (
      <header className="header">
        <NavLink to="/" className="header-link" onClick={() => this.changePage('home')}>
          Home
        </NavLink>
        <NavLink to="/form" className="header-link" onClick={() => this.changePage('form')}>
          Form
        </NavLink>
        <NavLink to="/about_us" className="header-link" onClick={() => this.changePage('about us')}>
          About Us
        </NavLink>
        <Location currentPage={this.state.pageName} />
      </header>
    );
  }
}
