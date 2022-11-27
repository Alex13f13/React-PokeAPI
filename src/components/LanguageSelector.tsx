import { useState } from 'react'
import { areTranslationsCorrect } from '../translations/language'

export default function LanguageSelector() {
  //Hacer es estado global para que accedan a el todos los componentes
  const [language, setLanguage] = useState<string>("en")

  const changeLanguage = (lang: string) => {
    setLanguage(lang)
  }

  return (
    <>
      {areTranslationsCorrect() && <div>
        <button onClick={() => changeLanguage("es")}>ES</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
      </div>}
    </>
  )
}
