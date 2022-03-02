import React from 'react'
import { useHistory } from 'react-router-dom';
import { showId, captalize, colorByType } from '../../utils/stringUtils';

import { PokemonCard, PokemonName, PokemonId } from './CardStyles'
import { IPokemonData } from '../../global';

import { Image, Loadings } from '..'
import interrogação from '../../assets/interrogação.png'




interface IProps {
    pokemon: IPokemonData
}

export default function Card({ pokemon }: IProps) {
    const push = useHistory().push;

    const handleClick = () => {
        push(`/pokemon/?name=${pokemon.name}`)
        // return;

    }
    const color = colorByType(pokemon.types[0].type.name)

    return (
        <PokemonCard color={color} onClick={handleClick}>


            <PokemonName>
                {captalize(pokemon.name)}
            </PokemonName>

            <Image
                onLoad={<Loadings.SpinningPokeball backGroundColor={color} />}
                // onError={() => { console.log({ error: `Imagem ${pokemon.id} não carregou` }) }}
                alt={pokemon.name}
                fallback={<img src={interrogação} alt="interrogação" style={{ width: "50%", padding: "10%", backgroundColor: "inherit" }} />}

                src={[
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`,
                ]}
            // src={['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]}
            />



            <PokemonId>
                {showId(pokemon.id)}
            </PokemonId>

        </PokemonCard>
    )

};
