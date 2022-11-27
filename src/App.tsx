import { useEffect, useState } from 'react'
import LanguageSelector from './components/LanguageSelector'
import PokemonList from './components/PokemonList'
import { lang } from './translations/language'

function App() {
  return (
    //Componente: selector de idiomas
    //Título de la página
    //Componente: Barra de busqueda por palabras
    //Filtros
    <div>
      {/* <h1>{lang(language).MessageHello}</h1> */}

      <LanguageSelector />
      <PokemonList />

    </div>
  )
}

export default App