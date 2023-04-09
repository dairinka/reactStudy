import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainPage from '../mainPage';

test('check display correct data from server', async () => {
  render(<MainPage />);
  expect(await screen.findByText('Aloha')).toBeInTheDocument();
  expect(await screen.findByText('Testy')).toBeInTheDocument();
  expect(document.querySelectorAll('.card'))?.toHaveLength(2);
  const amountSeachResult = document.getElementById('amount-result') as HTMLElement;
  expect(amountSeachResult).toHaveTextContent('Found 2 characters');
});
