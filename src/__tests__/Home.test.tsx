import { describe, it, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
// import { within } from '@testing-library/dom'
import Home from '../routes/Home';

describe('Cows and Bulls Game', () => {
  it('checks the guess correctly', () => {
    const {bulls, cows} = checkGuess('1234', '5678')
    expect(bulls).toBe(0)
    expect(cows).toBe(0)

    const { bulls: bulls2, cows: cows2 } = checkGuess('1234', '1234')
    expect(bulls2).toBe(4)
    expect(cows2).toBe(0)

    const { bulls: bulls3, cows: cows3 } = checkGuess('1234', '1243');
    expect(bulls3).toBe(2);
    expect(cows3).toBe(2);
  });

  it('renders the game and handles guesses', () => {
    render(<Home />);
    const input = screen.getByPlaceholderText('Enter your guess');
    const button = screen.getByText('Submit');

    // Enter an invalid guess
    fireEvent.change(input, { target: { value: '12' } });
    fireEvent.click(button);
    expect(screen.getByText('Please enter a valid 4-digit number.')).toBeInTheDocument();

    // Enter a valid guess
    fireEvent.change(input, { target: { value: '1234' } });
    fireEvent.click(button);
    expect(screen.getByText(/Cows and Bulls/i, {exact: false})).toBeInTheDocument();
  });
});

test('page title is correct!', () => {
  render(<Home />)

  const titleElement = document.querySelector('title');
  expect(titleElement).toBeInTheDocument();
  expect(titleElement?.textContent).toBe('Cows and Bulls Game')
})

// Helper function to test the game logic
function checkGuess(guess: string, secret: string) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (guess[i] === secret[i]) {
      bulls++;
    } else if (secret.includes(guess[i])) {
      cows++;
    }
  }

  return { bulls, cows };
}
