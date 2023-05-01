import { FC } from 'react';

interface ILocationProp {
  currentPage: string;
}
const Location: FC<ILocationProp> = ({ currentPage }) => {
  const correctPageName = (pageName: string) => {
    let correctName;
    switch (pageName) {
      case '/':
        correctName = 'HOME';
        break;
      case '/form':
        correctName = 'FORM';
        break;
      case '/about_us':
        correctName = 'ABOUT US';
        break;
      default:
        correctName = pageName;
    }
    return correctName;
  };
  return <div className="location">You are on {correctPageName(currentPage)} page</div>;
};

export default Location;
