const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonListAsync = async (limit: number) => {
  const response = await fetch(`${baseUrl}?limit=${limit}`);
  const data = await response.json();
  return data.results;
};

export const getPokemonAsync = async (pokemon: string) => {
  const url = `${baseUrl}/${pokemon}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}