import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Search from '../search';

describe('Search form', () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
  });
  test('displays the correct button', () => {
    const linkElement = screen.getByText(/Search/i);
    expect(linkElement).toBeVisible();
  });

  test('displays search field', () => {
    const searchElement = document.querySelector('.search-input');
    expect(searchElement).toBeVisible();
  });
});
