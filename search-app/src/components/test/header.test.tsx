//
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Header from '../header';
import { BrowserRouter } from 'react-router-dom';

test('full app rendering/navigating', async () => {
  render(<Header />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  expect(screen.getByText(/Home/)).toBeInTheDocument();
  expect(document.querySelector('.header-link.active[href = "/"]'))?.toBeInTheDocument();

  await user.click(screen.getByText(/About Us/));
  expect(screen.getByText(/ABOUT US/)).toBeInTheDocument();
  expect(document.querySelector('.header-link.active[href = "/about_us"]'))?.toBeInTheDocument();

  await user.click(screen.getByText(/Form/));
  expect(screen.getByText(/FORM/)).toBeInTheDocument();
  expect(document.querySelector('.header-link.active[href = "/form"]'))?.toBeInTheDocument();
});
