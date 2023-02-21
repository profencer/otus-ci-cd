import { render, screen } from '@testing-library/react';
import App, { id } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});

test('id function works as expected', () => {
  expect(id(1)).toEqual(1);
});
