import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IPokemonData } from '../../global';
import { getPokemonById } from '../../services/pokemon'
import {  colorByType, showId, captalize } from '../../utils/stringUtils';
import { PokemonContainer, PokemonImage, Data, DataText, Types, Type, Text } from './DetailsStyles';

interface IParams{
    id?:string
}


export default function PokemonDetails() {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState({} as IPokemonData);
    const [reloader, reload] = useState(0);
    const{id}:IParams=useParams();


    const loadPokemon = async () => {
        if (typeof (id) !== "string")
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
        <>
            <PokemonContainer color={colorByType(pokemon.types[0].type.name)}>


                <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />

                <Data color={colorByType(pokemon.types[0].type.name)}>
                    <DataText> {captalize(pokemon.name)}</DataText>

                    <DataText>{showId(pokemon.id)}</DataText>

                </Data>

            </PokemonContainer>

            <Types>
                {pokemon.types.map((item, index) => (

                    <Type key={index} >
                        <Text color={colorByType(item.type.name)}>
                            {captalize(item.type.name)}
                        </Text>
                    </Type>
                ))}
            </Types>
        </>
    )
}
