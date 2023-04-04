import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ComfortableList from '../comfortableList';

describe('ComfortableList in a page', () => {
  const someList: string[] = [
    '2 single beds',
    'kitchen',
    'bathroom',
    'balcony',
    'terrace',
    'air conditioning',
    'sea view',
    'free wi-fi',
  ];

  beforeEach(async () => {
    render(<ComfortableList comfortableList={someList} />);
  });
  it('check comfortable list creating', () => {
    expect(document.querySelector('.comfort-list')).toBeInTheDocument();
  });

  it('displays the correct data', () => {
    const element1 = screen.getByText(/kitchen/i);
    const element2 = screen.getByText(/free wi-fi/i);
    expect(element1).toBeVisible();
    expect(element2).toBeVisible();
  });
});
