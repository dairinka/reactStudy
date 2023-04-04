import React from 'react';
import { NavLink } from 'react-router-dom';
import { PagePathData } from 'types/type';
import Location from './location';

interface IHeaderProps {
  pathArray: PagePathData[];
}
type pageState = { pageName: string };
export default class Header extends React.Component<IHeaderProps, pageState> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      pageName: this.defineLocation(),
    };
  }

  defineLocation = (): string => {
    return window.location.pathname === '/'
      ? this.props.pathArray[0].pageName.toUpperCase()
      : window.location.pathname.slice(1).toUpperCase().replace(/_/, ' ');
  };

  changePage = (currentPageName: string) => {
    const pageNameUpperCase = currentPageName.toUpperCase();
    this.setState({ pageName: pageNameUpperCase });
  };

  public render() {
    return (
      <header className="header">
        {this.props.pathArray.map(({ pageName, pagePath, id }) => {
          return (
            <NavLink
              to={pagePath}
              key={id}
              className="header-link"
              onClick={() => this.changePage(pageName)}
            >
              {pageName}
            </NavLink>
          );
        })}
        <Location currentPage={this.state.pageName} />
      </header>
    );
  }
}
