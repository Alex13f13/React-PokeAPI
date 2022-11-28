import AlphabetButton from "./AlphabetButton";
import { render, screen } from "@testing-library/react";

describe('AlphabetButton', () => {
  test('should render the button', () => {
    render(<AlphabetButton />);
    expect(screen.getByRole('button')).toBeDefined();
  })
})