import en from "./english.json";
import es from "./spanish.json";

export const areTranslationsCorrect = () => {
  let isTranslationsCorrect = true;
  Object.keys(en).forEach((key) => {
    if (!es[key as keyof typeof es]) {  //Al utilizar TypeScript, es necesario definir el tipo de key que utilizamos en el if
      console.log(`Falta la traducción de ${key} en español`);
      isTranslationsCorrect = false;
    }
  });
  Object.keys(es).forEach((key) => {
    if (!en[key as keyof typeof en]) {
      console.log(`Falta la traducción de ${key} en inglés`);
      isTranslationsCorrect = false;
    }
  });
  return isTranslationsCorrect;
}

//Idioma de la aplicación, con English como valor por defecto
export const lang = (language?: string) => {
  const languageText = options.find((opt) => opt.key === language);
  return languageText ? languageText.languages : en;
};

//Selector de idiomas
export const options = [
  { key: "es", languages: es },
  { key: "en", languages: en },
];
