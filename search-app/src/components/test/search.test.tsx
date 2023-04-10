import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../search';

const handleChangeList = (): void => {};

it('displays the correct button', () => {
  render(<Search changeList={handleChangeList} />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeVisible();
});

it('displays search field', () => {
  render(<Search changeList={handleChangeList} />);
  const searchElement = document.querySelector('.search-input');
  expect(searchElement).toBeVisible();
});
