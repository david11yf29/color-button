import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  screen.getByRole('button', { name: "change to blue" });
});

test('button has correct initial text', () => {

});

test('button turns blue when clicked', () => {

});
