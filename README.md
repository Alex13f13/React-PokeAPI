## React Proyect using Typescript + Vite + Vitest and the PokeAPI
![image](https://user-images.githubusercontent.com/46814661/204136597-8dfae4c1-06e5-4587-8593-923af84a23aa.png)

## Problema 1 - React
- API calls -> src/api/pokeApi
- List fist 20 Pokemons -> src/componets/PokemonList
- Case-insensitive search bar -> src/componets/PokemonList
- Alphabetical order button -> src/componets/AlphabetButton

## Problema 2 - Algoritmia
Our goal will be to develop a function that checks that all the keys in the file
english.json file are in the spanish.json file and vice versa.

Using the JSONs from "src/translations", the language change logic is performed in "src/translations/language".

For the execution of the logic we use the LanguageSelector component that checks if the JSONs has all the keys.
- Checking translations -> src/componets/LanguageSelector

If any problem is found, this component is not deployed and throws the error to the console.
