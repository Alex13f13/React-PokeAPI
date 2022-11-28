import LanguageSelector from "./LanguageSelector";
import { render, screen } from "@testing-library/react";

describe('LanguageSelector', () => {
  test('should render the button', () => {
    render(<LanguageSelector />);
    expect(screen.getByRole('button')).toBeDefined();
  })
})