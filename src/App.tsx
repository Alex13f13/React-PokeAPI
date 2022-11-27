import { useEffect, useState } from 'react'
import LanguageSelector from './components/LanguageSelector'
import PokemonList from './components/PokemonList'
import SearchBar from './components/SearchBar'
import { lang } from './translations/language'

function App() {


  return (
    //Título de la página
    //Componente: Barra de busqueda por palabras
    //Filtros
    <div>
      {/* <h1>{lang(language).MessageHello}</h1> */}

      <LanguageSelector />
      <SearchBar />
      <PokemonList />

    </div>
  )
}

export default App