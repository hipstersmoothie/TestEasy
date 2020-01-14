import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from '.';

describe('ProgressBar', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<ProgressBar />);
    expect(container).toMatchSnapshot();
  });
});
