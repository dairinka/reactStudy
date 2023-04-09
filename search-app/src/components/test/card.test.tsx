import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../card';
import { IServerDataResult } from '../../types/type';

describe('Card in a page', () => {
  const fakeData: IServerDataResult = {
    id: 2,
    name: 'Aloha',
    status: 'Alive',
    species: 'human',
    type: 'human',
    gender: 'male',
    origin: {
      name: 'Earth',
      url: 'http://earth.com/aloha',
    },
    location: {
      name: 'Earth',
      url: 'http://earth.com/aloha',
    },
    image: 'http://earth.com/image',
    episode: ['http://earth.com/episode1', 'http://earth.com/episode2'],
    url: 'http://earth.com/aloha',
    created: '02.03.2003',
  };

  beforeEach(async () => {
    render(<Card data={fakeData} />);
  });

  it('check card creating', () => {
    expect(document.querySelector('.card__status')).toBeInTheDocument();
    expect(document.querySelector('.card__img')).toBeInTheDocument();
    expect(document.querySelector('.card__gender')).toBeInTheDocument();
    expect(document.querySelector('.card__name')).toBeInTheDocument();
    expect(document.querySelector('.card__type')).toBeInTheDocument();
  });

  it('displays the correct data', () => {
    const element1 = screen.getByText(/Aloha/i);
    const element2 = screen.getByText(/Alive/i);
    const element3 = screen.getByText(/human/i);
    const element4 = screen.getByText(/male/i);
    expect(element1).toBeVisible();
    expect(element2).toBeVisible();
    expect(element3).toBeVisible();
    expect(element4).toBeVisible();
  });
});
