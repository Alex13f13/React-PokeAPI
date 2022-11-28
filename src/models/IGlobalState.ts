import { IPokemon } from "./IPokemon";

export interface IGlobalState {
  currentLanguage: string;
  pokemonList: IPokemon[];
}

export const emptyGlobalState = (): IGlobalState => {
  return {
    currentLanguage: "en",
    pokemonList: [],
  };
};