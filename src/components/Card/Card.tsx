import React from 'react'
import { useHistory } from 'react-router-dom';
import { showId, captalize } from '../../utils';
import { PokemonCard, PokemonName, PokemonId } from './CardStyles'
import {ImageLoad} from "../"



interface IProps {
  pokemon: IPokemon
}
export default function Card({ pokemon }: IProps) {
  const history = useHistory()

  const handleClick = (id: number) => {
    // const history = useHistory()
    return;
    // history.push(`/pokemon/?id=${id}`);

  }

  return (
    <PokemonCard onClick={() => (handleClick(pokemon.id))}>

      <PokemonName>
        {captalize(pokemon.name)}
      </PokemonName>

      <ImageLoad src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} onError={()=>{console.log({error:`Imagem ${pokemon.id} não carregou`})}} alt={pokemon.name} />
      {/* <ImageLoad src={['']} onError={()=>{console.log({error:`Imagem ${pokemon.id} não carregou`})}} alt={pokemon.name} /> */}
     
      <PokemonId>
        {showId(pokemon.id)}
      </PokemonId>

    </PokemonCard>
  )

};
