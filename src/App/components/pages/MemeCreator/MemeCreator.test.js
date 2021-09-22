import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemeCreator from './MemeCreator';

describe('<MemeCreator />', () => {
  test('it should mount', () => {
    render(<MemeCreator />);
    
    const memeCreator = screen.getByTestId('MemeCreator');

    expect(memeCreator).toBeInTheDocument();
  });
});