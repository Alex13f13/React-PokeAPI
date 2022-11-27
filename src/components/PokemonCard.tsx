import { useEffect, useState } from 'react'
import { getPokemonAsync } from '../api/pokeApi';
import { IPokemonCard } from '../models/IPokemonCard'

export default function PokemonCard({ name }: IPokemonCard) {
  const [image, setImage] = useState('')

  useEffect(() => {
    getPokemonAsync(name).then((res) => {
      setImage(res.sprites.front_default)
    }).catch((err) => console.log(err))
  }, [])


  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
    </div>
  )
}
