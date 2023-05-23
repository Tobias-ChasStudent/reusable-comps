import { render, screen } from '@testing-library/react';

import Button from './Button';

const normalBtn = {
    color: "#000000",
    background: "#32CD32"
  }

describe('Button component', () => {
  it('renders as normal button', () => {
    render(<Button style={normalBtn} />);

    screen.debug();

    // check if App components renders headline
  });
});