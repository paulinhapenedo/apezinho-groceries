import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import singletonRouter from 'next/router';
import { useSession } from 'next-auth/react';

import Home from '@pages/index';

describe('Home', () => {
  it('renders a heading with the app name', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /tem... mas acabou/i,
    });

    expect(heading).toBeInTheDocument();
  });
  it('renders a CTA that redirects the user to the logged area if logged in', () => {
    render(<Home />);

    const CTA = screen.getByRole('button', { name: /Entrar/i });

    expect(CTA).toBeInTheDocument();

    userEvent.click(CTA);

    expect(singletonRouter).toMatchObject({
      asPath: '/groceries',
      pathname: '/groceries',
    });
  });
});
