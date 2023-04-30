import { FC, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { PagePathData } from '../types/type';
import Location from './location';

interface IHeaderProps {
  pathArray: PagePathData[];
}

const Header: FC<IHeaderProps> = ({ pathArray }) => {
  const currentLocation = useLocation();

  const [pageName, setPageName] = useState(currentLocation.pathname);

  const changePage = (currentPageName: string) => {
    const pageNameUpperCase = currentPageName.toUpperCase();
    setPageName(pageNameUpperCase);
  };

  return (
    <header className="header">
      {pathArray.map(({ pageName, pagePath, id }) => {
        return (
          <NavLink
            to={pagePath}
            key={id}
            className="header-link"
            onClick={() => changePage(pageName)}
          >
            {pageName}
          </NavLink>
        );
      })}
      <Location currentPage={pageName} />
    </header>
  );
};

export default Header;
