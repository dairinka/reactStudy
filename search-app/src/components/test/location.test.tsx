import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Location from '../location';

describe('Location in a page', () => {
  const pageName = 'Sun';

  beforeEach(async () => {
    render(<Location currentPage={pageName} />);
  });
  it('check location element on page', () => {
    const locationElement = document.querySelector('.location') as HTMLElement;
    expect(locationElement).toBeInTheDocument();
  });

  it('displays the correct location data', () => {
    const element = screen.getByText(/Sun/i);
    expect(element).toBeVisible();
  });
});
