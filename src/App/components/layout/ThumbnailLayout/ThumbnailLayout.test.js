import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThumbnailLayout from './ThumbnailLayout';

describe('<ThumbnailLayout />', () => {
  test('it should mount', () => {
    render(<ThumbnailLayout />);
    
    const thumbnailLayout = screen.getByTestId('ThumbnailLayout');

    expect(thumbnailLayout).toBeInTheDocument();
  });
});