import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { IServerDataResultPlus } from 'types/type';
import ModalCard from '../modalCard';

describe('Location in a page', () => {
  const fakeData: IServerDataResultPlus = {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/8'],
    url: 'https://rickandmortyapi.com/api/character/3',
    created: '2017-11-04T19:09:56.428Z',
    name_first_episode: 'Rick Potion #9',
    name_last_episode: 'Rick Potion #9',
  };
  const fakeData2: IServerDataResultPlus = {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: 'Human',
    gender: 'Female',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/8'],
    url: 'https://rickandmortyapi.com/api/character/3',
    created: '2017-11-04T19:09:56.428Z',
    name_first_episode: 'Rick Potion #9',
    name_last_episode: 'Rick Potion #9',
  };
  const fakeHandleOnClick = (): void => {};

  it('check card element on page', () => {
    render(<ModalCard data={fakeData} isShowModal={true} handleOnClick={fakeHandleOnClick} />);
    const cardElement = document.querySelector('.card-modal') as HTMLElement;
    expect(cardElement).toBeInTheDocument();
  });

  it('displays the correct data', () => {
    render(<ModalCard data={fakeData} isShowModal={true} handleOnClick={fakeHandleOnClick} />);
    const typeEl = document.querySelector('.card-modal__type');
    expect(typeEl).not.empty;
    expect(typeEl).toHaveTextContent('Human');
    expect(screen.getByText(/Summer Smith/i)).toBeVisible();
    expect(screen.getByText(/Alive/i)).toBeVisible();
    expect(screen.getByText(/Earth/i)).toBeVisible();
    const episodes = screen.getAllByText(/Rick Potion #9/i);
    expect(episodes[0]).toBeInTheDocument();
    expect(episodes[1]).toBeInTheDocument();
  });

  it('check not display card', () => {
    render(<ModalCard data={fakeData} isShowModal={false} handleOnClick={fakeHandleOnClick} />);
    const cardElement = document.querySelector('.card-modal') as HTMLElement;
    expect(cardElement).not.toBeInTheDocument();
  });

  it('check correct type', () => {
    render(<ModalCard data={fakeData2} isShowModal={true} handleOnClick={fakeHandleOnClick} />);
    const typeEl = document.querySelector('.card-modal__type');
    expect(typeEl).not.empty;
    expect(typeEl).toHaveTextContent('Human - Human');
  });
});
