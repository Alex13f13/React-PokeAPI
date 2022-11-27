import { useEffect, useState } from 'react'
import { getPokemonAsync, getPokemonListAsync } from './api/pokeApi'
import PokemonList from './components/PokemonList'
import { areTranslationsCorrect, lang } from './translations/language'

function App() {

  const [language, setLanguage] = useState<string>("en")

  const changeLanguage = (lang: string) => {
    setLanguage(lang)
  }

  useEffect(() => {

    //Details
    getPokemonAsync("bulbasaur").then((res) => {
      console.log(res);
    }).catch((err) => console.log(err))
  }, [])


  return (
    //Componente: selector de idiomas
    //Título de la página
    //Componente: Barra de busqueda por palabras
    //Filtros
    //spinner
    //Componente: Lista de pokemon > Componente: Tranjeta de pokemon
    <div>
      <h1>{lang(language).MessageHello}</h1>
      {areTranslationsCorrect() && <div>
        <button onClick={() => changeLanguage("es")}>ES</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
      </div>}

      <PokemonList />

    </div>

  )
}

export default App