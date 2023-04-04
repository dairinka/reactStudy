import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import MainPage from '../mainPage';

test('check searching', async () => {
  render(<MainPage />);
  const user = userEvent.setup();
  const inputSearch = await screen.findByPlaceholderText(/search apartment/);
  const searchBtn = document.querySelector('.search-btn') as HTMLButtonElement;
  const amountSeachResult = document.getElementById('amount-result') as HTMLElement;

  await user.type(inputSearch, 'Blue Dream');
  await user.click(searchBtn);
  expect(document.querySelectorAll('.card'))?.toHaveLength(1);
  expect(amountSeachResult).toHaveTextContent('Found 1 apartments');

  await user.type(inputSearch, 'Nothing happend');
  await user.click(searchBtn);
  expect(amountSeachResult).toHaveTextContent('Not found. Try another query');
});
