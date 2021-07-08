import { render, screen, cleanup } from '@testing-library/react';
import Header from '../Header';

afterEach( () => {
    cleanup();
});

test('header should be rendered', () => {
    render(<Header />);

    const headerElement = screen.getByTestId('header');

    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent('New Posts');
})

