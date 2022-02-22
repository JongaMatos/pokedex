import React, { useEffect, useState } from 'react';
import { Container } from './ListPokemonsStyles';
import { Card, Loadings, PaginationBar } from '../../components';
// import { urlToId } from '../../utils';
import { IPokemonData } from '../../global';

interface IProps {
    page: number;
    pokemons: IPokemonData[];
    count: number;
    filter?: string
}

export default function ListPokemons({ page, pokemons, count, filter }: IProps) {
    const [isLoading, setIsLoading] = useState(true);
    const perPage = 60;

    const setLoaded = setTimeout(() => { setIsLoading(false) }, perPage * 11)

    useEffect(() => {
        return () => {
            clearTimeout(setLoaded);
        }
        // eslint-disable-next-line
    }, [])


    return (
        <>
            {console.log({ page })}
            {isLoading && <Loadings.Spinner />}

            <Container isLoading={isLoading}>
                {pokemons && pokemons
                    .filter((pokemon: IPokemonData, index: number) => (index >= (page - 1) * perPage && index < page * perPage))
                    .map(
                        (pokemon: IPokemonData) => (<Card key={pokemon.name} pokemon={pokemon} />)
                    )
                }
            </Container>

            <PaginationBar
                filter={filter || "none"}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                currentPage={page}
                count={count}
                maxPerPage={perPage}
            />

        </>
    )
}
