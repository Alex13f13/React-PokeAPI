import PokemonCard from "./PokemonCard";
import { render, screen } from "@testing-library/react";

describe('PokemonCard', () => {
  test('should render the button', () => {
    render(<PokemonCard name='bulbasaur' />);
    expect(screen.getByRole('img')).toBeDefined();
  })
})