import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Header from '../header';
import { BrowserRouter } from 'react-router-dom';
import { PagePathData } from 'types/type';

const pagePathData: PagePathData[] = [
  { pageName: 'Home page', pagePath: '/', id: 1 },
  { pageName: 'Zoo', pagePath: '/zoo', id: 2 },
  { pageName: 'Rino', pagePath: '/rino', id: 3 },
];

test('full app rendering/navigating', async () => {
  render(<Header pathArray={pagePathData} />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  expect(screen.getByText(/HOME PAGE/)).toBeInTheDocument();
  expect(document.querySelector('.header-link.active[href = "/"]'))?.toBeInTheDocument();

  await user.click(screen.getByText(/Zoo/));
  expect(screen.getByText(/ZOO/)).toBeInTheDocument();
  expect(document.querySelector('.header-link.active[href = "/zoo"]'))?.toBeInTheDocument();

  await user.click(screen.getByText(/Rino/));
  expect(screen.getByText(/RINO/)).toBeInTheDocument();
  expect(document.querySelector('.header-link.active[href = "/rino"]'))?.toBeInTheDocument();
});

it('check data header when pathname changed to Form page', () => {
  Object.defineProperty(window, 'location', {
    value: new URL('http://localhost/form'),
  });
  render(<Header pathArray={pagePathData} />, { wrapper: BrowserRouter });
  expect(window.location.pathname).toBe('/form');
  const textHeader = document.querySelector('.location') as HTMLElement;
  expect(textHeader).toHaveTextContent('FORM');
});

it('check data header when pathname changed to About Us page', () => {
  Object.defineProperty(window, 'location', {
    value: new URL('http://localhost/about_us'),
  });

  render(<Header pathArray={pagePathData} />, { wrapper: BrowserRouter });
  expect(window.location.pathname).toBe('/about_us');
  const textHeader = document.querySelector('.location');
  expect(textHeader).toHaveTextContent('ABOUT US');
});

it('check data header when pathname changed to Home page', () => {
  Object.defineProperty(window, 'location', {
    value: new URL('http://localhost/'),
  });

  render(<Header pathArray={pagePathData} />, { wrapper: BrowserRouter });
  expect(window.location.pathname).toBe('/');
  const textHeader = document.querySelector('.location');
  expect(textHeader).toHaveTextContent('HOME');
});
