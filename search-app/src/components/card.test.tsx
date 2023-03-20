import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './card';
import { ApartmentData } from 'types/type';

describe('Card in a page', () => {
  const testApartment: ApartmentData = {
    id: 1,
    name: 'Blue Dream',
    city: 'Gaeta',
    price: 73,
    rates: '9',
    url: '../img/blue_dream.png',
    comfortable: [
      '2 single beds',
      'kitchen',
      'bathroom',
      'balcony',
      'terrace',
      'air conditioning',
      'sea view',
      'free wi-fi',
    ],
    language: ['italian'],
  };

  beforeEach(async () => {
    render(<Card data={testApartment} />);
  });

  it('check card creating', () => {
    expect(document.querySelector('.card__city')).toBeInTheDocument();
    expect(document.querySelector('.card__rates')).toBeInTheDocument();
    expect(document.querySelector('.card__img')).toBeInTheDocument();
    expect(document.querySelector('.card__name')).toBeInTheDocument();
    expect(document.querySelector('.card__price')).toBeInTheDocument();
    expect(document.querySelector('.card__language')).toBeInTheDocument();
  });

  it('displays the correct data', () => {
    const element1 = screen.getByText(/Blue Dream/i);
    const element2 = screen.getByText(/Gaeta/i);
    expect(element1).toBeVisible();
    expect(element2).toBeVisible();
  });
});
