import React from 'react'
import { useHistory } from 'react-router-dom';
import { showId, captalize } from '../../utils';
import { PokemonCard, PokemonImage, PokemonName, PokemonId } from './CardStyles'

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

      <PokemonName>
        {captalize(pokemon.name)}
      </PokemonName>

      <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />

      <PokemonId>
        {showId(pokemon.id)}
      </PokemonId>

    </PokemonCard>
  )

};
