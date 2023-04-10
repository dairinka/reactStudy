import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCard from '../formCard';
import { FormCardData } from '../../../types/type';

describe('Form card in a page', () => {
  const formCardData: FormCardData = {
    name: 'Rony',
    email: 'test@gmail.com',
    state: 'single',
    pets: false,
    city: 'Paris',
    maxPrice: 'twenty',
    startDate: '10.10.2023',
  };

  beforeEach(async () => {
    render(<FormCard data={formCardData} />);
  });

  it('check card creating', () => {
    expect(document.querySelector('.user-name.card-line')).toBeInTheDocument();
    expect(document.querySelector('.user-email.card-line')).toBeInTheDocument();
    expect(document.querySelector('.user-state.card-line')).toBeInTheDocument();
    expect(document.querySelector('.rental-date.card-line')).toBeInTheDocument();
    expect(document.querySelector('.rental-city.card-line')).toBeInTheDocument();
    expect(document.querySelector('.rental-max-price.card-line')).toBeInTheDocument();
    expect(document.querySelector('.user-pet.card-line')).toBeInTheDocument();
    expect(document.querySelector('.user-passport')).toBeInTheDocument();
  });

  it('displays the correct data', () => {
    const element1 = screen.getByText(/Rony/i);
    const element2 = screen.getByText(/test@gmail.com/i);
    const element3 = screen.getByText(/single/i);
    const element4 = screen.getByText(/no/i);
    const element5 = screen.getByText(/Paris/i);
    const element6 = screen.getByText(/twenty/i);
    const element7 = screen.getByText(/10.10.2023/i);

    expect(element1).toBeVisible();
    expect(element2).toBeVisible();
    expect(element3).toBeVisible();
    expect(element4).toBeVisible();
    expect(element5).toBeVisible();
    expect(element6).toBeVisible();
    expect(element7).toBeVisible();
  });
});
