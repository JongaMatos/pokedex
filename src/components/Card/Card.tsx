import React from 'react'
// import { useHistory } from 'react-router-dom';
import { showId, captalize } from '../../utils';
import { PokemonCard, PokemonName, PokemonId,PokemonImage } from './CardStyles'
// import { Img } from 'react-image'

// import { Oval as Loading } from 'react-loader-spinner'


interface IProps {
  pokemon: IPokemon
}
export default function Card({ pokemon }: IProps) {
  // const history = useHistory();

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

      <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
      {/* <Img
        src={
          [`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`]}

        loader={<Loading color='#B3D7FB' width={"100%"} />}
        
        style={{ maxWidth: "100%" }} /> */}
      <PokemonId>
        {showId(pokemon.id)}
      </PokemonId>

    </PokemonCard>
  )

};
