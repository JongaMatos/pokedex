import React from 'react'
import { useHistory } from 'react-router-dom';
import { urlToId } from '../../utils';
import { PokemonCard, PokemonImage, PokemonName } from './style'

interface IProps {
  pokemon: IPokemon
}
export default function Card({ pokemon }: IProps) {
  const history = useHistory()

  const handleClick = (id: number) => {
    // const history = useHistory()
    history.push(`/pokemon/?id=${id}`);
    return;

  }

  return (
    <PokemonCard onClick={() => (handleClick(pokemon.id))}>
      {/* {urlToId(pokemon.url)} */}
      <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name}  />

      <PokemonName>
        {pokemon.name}
      </PokemonName>

    </PokemonCard>
  )

};
