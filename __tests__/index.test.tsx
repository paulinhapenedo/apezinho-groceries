import { render, screen } from '@testing-library/react';
import Home from '@pages/index';

describe('Home', () => {
  it('renders a heading with the app name', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /tem... mas acabou/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
