import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Testa se o nome aparece na logo', () => {
  render(<App />);
  const nameOnLogo = screen.getByText(/Antônio Gonçalves/i);
  expect(nameOnLogo).toBeInTheDocument();
});
