import React from 'react'
<<<<<<< HEAD
// import { useHistory } from 'react-router-dom';
=======
>>>>>>> cb09e51a3209f2f0c3f54f01be3fffe638549939
import { showId, captalize } from '../../utils';
import { PokemonCard, PokemonName, PokemonId } from './CardStyles'
import { Image, Loadings } from '..'
import interrogação from '../../assets/interrogação.jpg'




interface IProps {
    pokemon: IPokemon
}
export default function Card({ pokemon }: IProps) {
<<<<<<< HEAD
    // const history = useHistory()
=======
    // const push = usePush()
>>>>>>> cb09e51a3209f2f0c3f54f01be3fffe638549939

    const handleClick = (id: Number) => {
        // push(`/pokemon/?id=${id}`);
        return;

    }

    return (
        <PokemonCard onClick={() => (handleClick(pokemon.id))}>

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