import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter for testing
import { expect, it, describe } from 'vitest'
import App from '../App';
// import Home from '../routes/Home'
// import About from '../routes/About'

describe('App Component', () => {
  it('renders Home component for / route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const homeElement = screen.getByText('cows and bulls', {exact: false});
    expect(homeElement).toBeInTheDocument();
  });

  // it('renders About component for /about route', () => {
  //   render(
  //     <MemoryRouter initialEntries={['/about']}>
  //       <App />
  //     </MemoryRouter>
  //   );
  //   const aboutElement = screen.getByText('Welcome to the game of Cows and Bulls!');
  //   expect(aboutElement).toBeInTheDocument();
  // });
});
