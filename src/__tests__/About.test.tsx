import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../routes/About';

describe('About Component', () => {
  it('renders correctly', () => {
    render(<About />);
    const aboutElement = screen.getByText('Welcome to the game of Cows and Bulls!');
    expect(aboutElement).toBeInTheDocument();
  });
});
