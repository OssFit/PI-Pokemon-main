import { render, screen } from '@testing-library/react';
import SearchBar from './components/SearchBar/SearchBar';

test('Debe tener una searchBar', () => {
  render(<SearchBar/>);
  const linkElement = screen.getByText("Search");
  expect(linkElement).toBeInTheDocument();
});
