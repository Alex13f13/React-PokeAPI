import { useEffect, useState } from 'react'
import LanguageSelector from './components/LanguageSelector'
import PokemonList from './components/PokemonList'
import SearchBar from './components/SearchBar'
import { setCurrentLanguage } from './ReduxToolkit/globalStateSlice'
import { lang } from './translations/language'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './ReduxToolkit/store'

function App() {
  const dispatch = useDispatch();
  const { globalState } = useSelector((state: RootState) => state);

  if (globalState.currentLanguage === "") {
    const navigatorLanguage = navigator.language.substring(0, 2) || "en";
    dispatch(setCurrentLanguage(navigatorLanguage));
  }

  return (
    //Filtros
    <div>
      <h1>{lang().Title}</h1>
      <h2>{lang().Subtitle}</h2>

      <SearchBar />
      <LanguageSelector />
      <PokemonList />

    </div>
  )
}

export default App