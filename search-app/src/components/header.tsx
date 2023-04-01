import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PagePathData } from 'types/type';
import Location from './location';

interface IHeaderProps {
  pathArray: PagePathData[];
}

const Header: FC<IHeaderProps> = ({ pathArray }) => {
  const defineLocation = (): string => {
    return window.location.pathname === '/'
      ? pathArray[0].pageName.toUpperCase()
      : window.location.pathname.slice(1).toUpperCase().replace(/_/, ' ');
  };

  const [pageName, setPageName] = useState(defineLocation());

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
