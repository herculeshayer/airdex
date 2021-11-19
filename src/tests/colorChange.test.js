

import { render } from '@testing-library/react';
import changeColor from './../components/changeColor';

test('test colorChange', () => {
    expect(changeColor(25)).toBe('good');
    expect(changeColor(52)).toBe('moderate');
    expect(changeColor(325)).toBe('hazardous');
    expect(changeColor()).toBe('');
})





// import { render, screen } from '@testing-library/react';
// import App from '../App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
