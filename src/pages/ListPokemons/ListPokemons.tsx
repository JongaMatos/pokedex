import React, { useEffect, useState } from 'react';
import { Container } from './ListPokemonsStyles';
import { Card, PikachuLoading, PaginationBar, SearchBar } from '../../components';
// import { urlToId } from '../../utils';
import { IPokemonData } from '../../global';
import { useQuery } from '../../utils/hooks';

interface IProps {
    page: number;
    pokemons: IPokemonData[];
    count: number;
    filter?: string
}

export default function ListPokemons({ page, pokemons, count, filter }: IProps) {
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
                {pokemons && pokemons
                    .filter((pokemon: IPokemonData, index: number) => (index >= (teste - 1) * perPage && index < teste * perPage))
                    .map(
                        (pokemon: IPokemonData) => (<Card key={pokemon.name} pokemon={pokemon} />)
                    )
                }
            </Container>

            <PaginationBar
                filter={filter || "none"}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                currentPage={teste}
                count={count}
                maxPerPage={perPage}
            />

        </>
    )
}
