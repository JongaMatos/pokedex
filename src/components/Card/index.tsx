import React from 'react'


interface IProps {
  index: number;
  pokemon: {
    name: string,
    url: string
  }
}
export default function Card({ index, pokemon }: IProps) {
  return (
    <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`} alt={pokemon.name} />
      {pokemon.name}
    </div>
  )

};
