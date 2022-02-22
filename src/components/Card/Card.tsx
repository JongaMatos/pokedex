import React from 'react'
import { showId, captalize, colorByType } from '../../utils';
import { PokemonCard, PokemonName, PokemonId } from './CardStyles'
import { Image, Loadings } from '..'
import interrogação from '../../assets/interrogação.jpg'
import { IPokemonData } from '../../global';




interface IProps {
    pokemon: IPokemonData
}

export default function Card({ pokemon }: IProps) {

    const handleClick = (id: Number) => {
        // push(`/pokemon/?id=${id}`);
        return;

    }
    const color = colorByType(pokemon.types[0].type.name)

    return (
        <PokemonCard color={color} onClick={() => (handleClick(pokemon.id))}>


            <PokemonName>
                {captalize(pokemon.name)}
            </PokemonName>

            <Image
                onLoad={<Loadings.Spinner />}
                // onError={() => { console.log({ error: `Imagem ${pokemon.id} não carregou` }) }}
                alt={pokemon.name}
                fallback={<img src={interrogação} alt="interrogação" style={{ width: "100%" }} />}

                src={[
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
                    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`,
                ]}
            />

            <PokemonId>
                {showId(pokemon.id)}
            </PokemonId>

        </PokemonCard>
    )

};
