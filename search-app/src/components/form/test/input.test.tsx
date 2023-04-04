import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Input from '../input';
import { IInputProps } from '../input';

describe('Input in a page', () => {
  const options: IInputProps = {
    type: 'text',
    placeholder: 'check',
    inputName: 'strawberry',
  };

  beforeEach(async () => {
    render(<Input {...options} />);
  });

  it('check input creating', () => {
    expect(document.querySelector('.input-text.form-input')).toBeInTheDocument();
  });

  it('check label creating', () => {
    expect(document.querySelector('.input-label.form-label')).toBeInTheDocument();
  });

  it('displays the correct label data', () => {
    const element = screen.getByText(/strawberry/i);
    expect(element).toBeVisible();
  });
  it('displays the correct input data', () => {
    const element = screen.getByPlaceholderText(/check/i);
    expect(element).toBeVisible();
  });
});
