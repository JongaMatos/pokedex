import React, { useEffect, useState, useContext } from 'react';
import { Container } from './ListPokemonsStyles';
import { Card, PikachuLoading, PaginationBar, SearchBar } from '../../components';
import { IPokemonData } from '../../global';
import { useQuery } from '../../utils/hooks';

import { SearchContex } from '../../context';


export default function ListPokemons() {
    const { getFiltered } = useContext(SearchContex);
    const testPokemons = getFiltered();
    const { getPage } = useQuery();
    const [isLoading, setIsLoading] = useState(true);
    const perPage = 120;

    const teste = getPage();

    const setLoaded = setTimeout(() => { setIsLoading(false) }, perPage * 7)
    
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

            <Container isLoading={isLoading}>
                {testPokemons && testPokemons
                    .filter((pokemon: IPokemonData, index: number) => (index >= (teste - 1) * perPage && index < teste * perPage))
                    .map(
                        (pokemon: IPokemonData) => (<Card key={pokemon.name} pokemon={pokemon} />)
                    )
                }
            </Container>

            <PaginationBar
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                currentPage={teste}
                count={ (testPokemons && testPokemons.length) || 0}
                maxPerPage={perPage}
            />

        </>
    )
}
