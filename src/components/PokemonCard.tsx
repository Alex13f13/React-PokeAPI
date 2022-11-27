import React from 'react'
import { IPokemonCard } from '../models/IPokemonCard'

export default function PokemonCard({ name, url }: IPokemonCard) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
