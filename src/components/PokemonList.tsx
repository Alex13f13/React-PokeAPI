import { useEffect, useState } from 'react'
import { getPokemonListAsync } from '../api/pokeApi';

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    // Get the list of pokemon
    getPokemonListAsync(20).then((res) => {
      console.log(res);
      setPokemonList(res)
    }).catch((err) => console.log(err))
  }, [])


  return (
    <>
      {pokemonList.length > 0 ?
        <ul>
          {pokemonList.map((pokemon: any) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
        : <p>Loading...</p>}
    </>
  )
}
