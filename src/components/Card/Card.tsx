import React from 'react'
import { useHistory } from 'react-router-dom';
import { PokemonCard, PokemonImage, PokemonName } from './style'

interface IProps {
  index: number;

  pokemon: {
    name: string,
    url: string
  }
}
export default function Card({ index, pokemon }: IProps) {
  const history = useHistory()

  const handleClick = (id: number) => {
    // const history = useHistory()
    history.push(`/pokemon/?id=${id}`);
    return;

  }

  return (
    <PokemonCard onClick={()=>(handleClick(index))}>

      <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`} alt={pokemon.name} loading='lazy' />

      <PokemonName>
        {pokemon.name}
      </PokemonName>

    </PokemonCard>
  )

};
