import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCard from '../formCard';
import { FormCardData } from '../../../types/type';
// import { vi } from 'vitest';

describe('Form card in a page', () => {
  // const myMockFn = vi.fn((cb) => cb(new File(['hello'], 'hello.png', { type: 'image/png' })));
  // const file = new File(['hello'], 'hello.png', { type: 'image/png' });
  const file2 = new File(['img'], 'Image 23.jpg', {
    type: 'image/jpg',
    lastModified: 1642650438000,
  });
  // const blob = new Blob(['Hello, world!'], { type: 'text/plain' });
  // const img = document.querySelector('img');
  //console.log('Window.URL.createObjectURL(file2)', URL.createObjectURL(file2));

  // создаём <canvas> того же размера
  // const canvas = document.createElement('canvas');
  // canvas.width = img.clientWidth;
  // canvas.height = img.clientHeight;

  // const context = canvas.getContext('2d');

  // // копируем изображение в  canvas (метод позволяет вырезать часть изображения)
  // context.drawImage(img, 0, 0);
  // // мы можем вращать изображение при помощи context.rotate() и делать множество других преобразований

  // // toBlob является асинхронной операцией, для которой callback-функция вызывается при завершении
  // canvas.toBlob(function(blob) {
  //const file2 = new File()
  const formCardData: FormCardData = {
    name: 'Rony',
    email: 'test@gmail.com',
    state: 'single',
    pets: false,
    city: 'Paris',
    maxPrice: 'twenty',
    startDate: '10.10.2023',
    file: file2,
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
    const element8 = document.querySelector('img');

    expect(element1).toBeVisible();
    expect(element2).toBeVisible();
    expect(element3).toBeVisible();
    expect(element4).toBeVisible();
    expect(element5).toBeVisible();
    expect(element6).toBeVisible();
    expect(element7).toBeVisible();
    expect(element8).toBeVisible();
  });
});
