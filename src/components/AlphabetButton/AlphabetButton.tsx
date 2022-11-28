import { useDispatch, useSelector } from 'react-redux'
import { setPokemonList } from '../../ReduxToolkit/globalStateSlice';
import { RootState } from '../../ReduxToolkit/store';
import { lang } from '../../translations/language';

export default function AlphabetButton() {
  const dispatch = useDispatch();
  const { globalState } = useSelector((state: RootState) => state);
  const { pokemonList } = globalState;

  const orderPokemonList = () => {
    const pokemonListCopy = [...pokemonList];
    const orderedList = pokemonListCopy.sort((a: any, b: any) => a.name.localeCompare(b.name));
    dispatch(setPokemonList(orderedList));
  }

  return (
    <button onClick={orderPokemonList}>{lang().Alph_Order}</button>
  )
}
