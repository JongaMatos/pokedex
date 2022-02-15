import React, { useEffect, useState } from 'react'
import { getPokemonById } from '../../services/pokemon'
import { useQuery, colorByType } from '../../utils';
import { PokemonContainer, PokemonImage, TopData, Types, Type ,Text} from './style';




export default function PokemonDetails() {
    const query = useQuery();

    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState({} as IPokemonData);
    const [reloader, reload] = useState(0);


    const loadPokemon = async () => {
        const id = await query.get("id");
        if (!id)
            return;

        const result = await getPokemonById(parseInt(id))

        if (!result) {
            reload(reloader + 1);
            return;
        }

        setPokemon(result);
        setIsLoading(false);

    }

    useEffect(() => {
        if (reloader < 3)
            loadPokemon();

        // eslint-disable-next-line
    }, [reloader]);

    const showId = (id: number) => {
        if (id < 10)
            return "#00" + id;
        if (id < 100)
            return "#0" + id;

        return "#" + id;
    }

    if (isLoading)
        return (
            <h1>Carregando</h1>
        )

    return (
        <PokemonContainer>
            {console.log({ pokemon })}
            <TopData>
                <div>
                    {pokemon.name}
                </div>
                <div>
                    {showId(pokemon.id)}
                </div>
            </TopData>

            <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />

            <Types>

                {pokemon.types.map((item, index) => (
                    <Type key={index} color={colorByType(item.type.name)} >
                        <Text>
                            {item.type.name}
                        </Text>
                    </Type>
                ))}
            </Types>

        </PokemonContainer>
    )
}
