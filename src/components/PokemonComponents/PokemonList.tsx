import { useSelector } from 'react-redux';
import { RootState } from '../../ReduxToolkit/store';
import { lang } from '../../translations/language';
import PokemonCard from './PokemonCard';

export default function PokemonList() {
  const { globalState } = useSelector((state: RootState) => state);
  const { pokemonList } = globalState;

  return (
    <>
      {pokemonList.length > 0 ?
        <div>
          {pokemonList.map((pokemon: any) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
        : <p>{lang().No_Results}</p>}
    </>
  )
}
