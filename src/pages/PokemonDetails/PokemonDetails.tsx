import React, { useEffect, useState } from 'react'
import { getPokemonById } from '../../services/pokemon'
import { useQuery } from '../../utils';




export default function PokemonDetails() {
    const query = useQuery();

    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState({} as IPokemon);
    const [reloader, reload] = useState(0);


    const loadPokemon = async () => {
        const id = await query.get("id");
        if(!id)
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



    if (isLoading)
        return (
            <h1>Carregando</h1>
        )

    return (
        <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
            {pokemon.name}
        </div>
    )
}
