import React, { useContext } from 'react'
import { useQuery } from '../../utils/hooks'

import { LoadPokemonContext } from '../../context';

import { IPokemonData } from '../../global';

import { Container } from './DetailsStyles';
import { BigPokemonCard, Status } from '../../components';

export default function PokemonDetails() {
  const { getQuery } = useQuery();
  const name = getQuery('name');
  const { detailedPokemons } = useContext(LoadPokemonContext)
  const pokemon = selectByname(detailedPokemons, name);


  if (!pokemon)
    return (
      <>
        sem pokemon
      </>
    )
  return (
    <Container>
      <BigPokemonCard pokemon={pokemon} />
      <Status pokemon={pokemon} />

    </Container>
  )





}
const selectByname = (pokemons: IPokemonData[] | false, name: string | null) => {
  if (!pokemons)
    return false

  const filtered = pokemons.filter((pokemon) => pokemon.name === name);

  if (filtered.length === 0)
    return false;

  return filtered[0];

}