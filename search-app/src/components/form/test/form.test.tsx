import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Form from '../form';
import { ApartmentData } from '../../../types/type';

describe('Form in a page', () => {
  const apartmentData: ApartmentData[] = [
    {
      id: 1,
      name: 'Blue Dream',
      city: 'Paris',
      price: 100,
      rates: '9',
      url: '../img/blue_dream.png',
      comfortable: ['2 single beds', 'kitchen'],
      language: ['italian'],
    },
    {
      id: 2,
      name: 'The night siren',
      city: 'London',
      price: 350,
      rates: '9.1',
      url: '../img/night_siren.png',
      comfortable: ['free wi-fi', 'washing machine'],
      language: ['italian'],
    },
  ];
  const handleTest = () => {};

  beforeEach(async () => {
    render(<Form data={apartmentData} showCard={handleTest} />);
  });

  it('check form structure on the page', () => {
    const form = document.querySelector('.form') as HTMLFormElement;
    expect(form).not.toBeNull();
    const input = form.querySelectorAll('input');
    expect(input?.length).toBe(9);
  });

  test('check form working', async () => {
    const user = userEvent.setup();
    const citySelect = document.getElementById('city-select') as HTMLSelectElement;
    const stateRadio = document.getElementById('state1') as HTMLInputElement;
    const nameInput = document.getElementById('user-name') as HTMLInputElement;
    const emailInput = document.getElementById('user-email') as HTMLInputElement;
    const upload = document.getElementById('upload-img') as HTMLInputElement;
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const submitBtn = document.querySelector('.form-btn') as HTMLButtonElement;

    expect(citySelect).toBeInTheDocument();
    expect(stateRadio).toBeInTheDocument();

    await user.selectOptions(citySelect, 'London');
    expect(screen.getByText(/London/)).toBeInTheDocument();

    await user.click(stateRadio);
    expect(screen.getByText(/Single/)).toBeInTheDocument();

    await user.type(nameInput, 'Sony');
    expect(screen.getByText(/Your name/)).toBeInTheDocument();

    await user.type(emailInput, 'test@gmail.com');
    expect(screen.getByText(/Your email/)).toBeInTheDocument();

    await user.upload(upload, file);
    expect(screen.getByText(/Upload/)).toBeInTheDocument();

    await user.click(submitBtn);
    expect(screen.getByText(/Thank you. Card was created/));
  });
});
