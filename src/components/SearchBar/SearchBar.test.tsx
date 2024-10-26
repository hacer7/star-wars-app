import '@testing-library/jest-dom';
import SearchBar from '.';
import { render, screen, fireEvent } from '@/utils/test-utils';

describe('SearchBar', () => {

  beforeEach(() => {
    render(<SearchBar />);
  })

  it('renders the search bar with an input field', () => {
    const input = screen.getByLabelText(/Search character/i)
    expect(input).toBeInTheDocument();
  });

  it('updates the search value on input change', () => {
    const input = screen.getByLabelText(/Search character/i);
    fireEvent.change(input, { target: { value: 'luke skywalker' } });
    expect(input).toHaveValue('luke skywalker');
  });
});
