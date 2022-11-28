import LanguageSelector from './components/LanguageSelector/LanguageSelector'
import PokemonList from './components/PokemonComponents/PokemonList'
import SearchBar from './components/SearchBar/SearchBar'
import AlphabetButton from './components/AlphabetButton/AlphabetButton'
import { setCurrentLanguage } from './ReduxToolkit/globalStateSlice'
import { lang } from './translations/language'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './ReduxToolkit/store'

function App() {
  const dispatch = useDispatch();
  const { globalState } = useSelector((state: RootState) => state);
  const { currentLanguage } = globalState;

  //Get navigator language or take english as default
  if (currentLanguage === "") {
    const navigatorLanguage = navigator.language.substring(0, 2) || "en";
    dispatch(setCurrentLanguage(navigatorLanguage));
  }

  return (
    <div>
      <h1>{lang().Title}</h1>
      <h2>{lang().Subtitle}</h2>

      <SearchBar />
      <LanguageSelector />
      <AlphabetButton />
      <PokemonList />

    </div>
  )
}

export default App