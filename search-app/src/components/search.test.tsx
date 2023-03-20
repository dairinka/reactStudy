import { render, screen } from '@testing-library/react';
import Search from './search';

const handleChangeList = (): void => {};

it('displays the correct button', () => {
  render(<Search changeList={handleChangeList} />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeVisible();
});
