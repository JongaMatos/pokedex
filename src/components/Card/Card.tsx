import React, { useEffect, useState } from 'react'
import { showId, captalize, useApi, colorByType } from '../../utils';
import { PokemonCard, PokemonName, PokemonId } from './CardStyles'
import { Image, Loadings } from '..'
import interrogação from '../../assets/interrogação.jpg'
import { IPokemon } from '../../global';




interface IProps {
    pokemon: IPokemon
}

export default function Card({ pokemon }: IProps) {
    const [apiResult, isLoading, Reload] = useApi(`pokemon/${pokemon.id}`);
    const [color, setColor] = useState("black");

    useEffect(() => {
        // eslint-disable-next-line
        let cancelled = false
        if (apiResult && !isLoading) {
            setColor(colorByType(apiResult.types[0].type.name))

        }
        if (!apiResult && !isLoading) {
            Reload();
            console.log(`Reloading ${pokemon.name}`)
        }


        return () => {
            // eslint-disable-next-line
            cancelled = true;
        };
            // eslint-disable-next-line
    }, [apiResult, isLoading])


    // const push = usePush()

    const handleClick = (id: Number) => {
        // push(`/pokemon/?id=${id}`);
        return;

    }


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


            {/* <Image
                src={['']}
                alt={pokemon.name}
                onLoad={<Loadings.Spinner />}
                fallback={<img src={interrogação} style={{maxWidth:"100%"}}/>}
            /> */}

            <PokemonId>
                {showId(pokemon.id)}
            </PokemonId>

        </PokemonCard>
    )

};
