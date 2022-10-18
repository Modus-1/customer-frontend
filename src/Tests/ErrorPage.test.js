import React from 'react';
import '@testing-library/jest-dom'
import ErrorPage from '../Pages/ErrorPage';
import { render, screen } from '@testing-library/react';

test('The error page gives an error message', () => {
    render(<ErrorPage />);
    expect(screen.getByText('Sorry, that page does not exist')).toBeInTheDocument();
});