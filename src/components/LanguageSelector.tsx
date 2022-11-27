import { areTranslationsCorrect } from '../translations/language'
import { useDispatch } from 'react-redux'
import { setCurrentLanguage } from '../ReduxToolkit/globalStateSlice';

export default function LanguageSelector() {
  //Hacer es estado global para que accedan a el todos los componentes
  const dispatch = useDispatch();

  const changeLanguage = (lang: string) => {
    dispatch(setCurrentLanguage(lang))
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
