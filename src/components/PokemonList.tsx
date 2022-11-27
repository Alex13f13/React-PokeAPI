import { useEffect, useState } from 'react'
import { getPokemonListAsync } from '../api/pokeApi';
import PokemonCard from './PokemonCard';

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    getPokemonListAsync(20).then((res) => {
      setPokemonList(res)
    }).catch((err) => console.log(err))
  }, [])

  return (
    <>
      {pokemonList.length > 0 ?
        <div>
          {pokemonList.map((pokemon: any) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
        : <p>Loading...</p>}
    </>
  )
}
