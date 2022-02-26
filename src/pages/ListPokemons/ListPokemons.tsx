import React, { useEffect, useState, useContext } from 'react';
import { Container } from './ListPokemonsStyles';
import { Card, PikachuLoading, PaginationBar, SearchBar } from '../../components';
import { IPokemonData } from '../../global';
import { useQuery } from '../../utils/hooks';

import { SearchContex } from '../../context';


export default function ListPokemons() {
    const { getFiltered } = useContext(SearchContex);
    const pokemons = getFiltered();
    const { getPage } = useQuery();
    const [isLoading, setIsLoading] = useState(true);
    const perPage = 60;

    const page = getPage();

    const setLoaded = setTimeout(() => { setIsLoading(false) }, perPage * 2)

    useEffect(() => {
        return () => {
            clearTimeout(setLoaded);
        }
        // eslint-disable-next-line
    }, [])




    return (
        <>
            {isLoading && <PikachuLoading />}
            {!isLoading && <SearchBar />}
            <Container hide={isLoading}>
                {pokemons && pokemons
                    .filter((pokemon: IPokemonData, index: number) => (index >= (page - 1) * perPage && index < page * perPage))
                    .map(
                        (pokemon: IPokemonData) => (<Card key={pokemon.name} pokemon={pokemon} />)
                    )
                }
            </Container>

            <PaginationBar
                hide={isLoading || !(pokemons && pokemons.length > perPage)}
                setIsLoading={setIsLoading}
                currentPage={page}
                count={(pokemons && pokemons.length) || 0}
                maxPerPage={perPage}
            />

        </>
    )
}
