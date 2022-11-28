import { useDispatch } from 'react-redux'
import { setPokemonList } from '../../ReduxToolkit/globalStateSlice';
import { useEffect, useState } from 'react';
import { getPokemonListAsync } from '../../api/pokeApi';
import { useDebounce } from 'use-debounce';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchedText, setSearchedText] = useState('');
  const [textToFilter] = useDebounce(searchedText, 500); //500ms delay to get the new pokemon list filtered

  //Get the pokemon list from the API
  useEffect(() => {
    getPokemonListAsync(20).then((res) => {
      const filteredResults = res.filter((pokemon: any) => pokemon.name.includes(textToFilter.toLowerCase()));
      dispatch(setPokemonList(filteredResults));
    }).catch((err) => console.log(err))
  }, [textToFilter])

  const handleInputChange = (e: any) => {
    setSearchedText(e.target.value);
  }

  return (
    <input type="text" value={searchedText} onChange={handleInputChange} />
  )
}
