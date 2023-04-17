import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import MainPage from '../mainPage';

test('mainPage', async () => {
  render(
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
  expect(await screen.findByText('Aloha')).toBeInTheDocument();
  expect(await screen.findByText('Testy')).toBeInTheDocument();
  expect(document.querySelectorAll('.card'))?.toHaveLength(2);
  const amountSeachResult = document.getElementById('amount-result') as HTMLElement;
  expect(amountSeachResult).toHaveTextContent('Found 2 characters');
});
