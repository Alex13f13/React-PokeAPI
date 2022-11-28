import SearchBar from "./SearchBar";
import { render, screen } from "@testing-library/react";

describe('SearchBar', () => {
  test('should render the button', () => {
    render(<SearchBar />);
    expect(screen.getByRole('input')).toBeDefined();
  })
})