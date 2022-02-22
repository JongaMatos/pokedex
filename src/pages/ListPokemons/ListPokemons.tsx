import React, { useEffect, useState } from 'react';
import { Container } from './ListPokemonsStyles';
import { Card, Loadings, Pagination } from '../../components';
import { urlToId } from '../../utils';
import { IPokemon } from '../../global';

interface IProps {
    page: number;
    pokemons: IPokemon[];
    count: number;
}

export default function ListPokemons({ page, pokemons, count }: IProps) {
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
            {isLoading && <Loadings.Spinner />}

            <Container isLoading={isLoading}>
                {pokemons && pokemons
                    .filter((pokemon: IPokemon, index: number) => (index >= (page - 1) * perPage && index < page * perPage))
                    .map((pokemon: IPokemon) => {

                        { pokemon.id = urlToId(pokemon.url) }// eslint-disable-line

                        return (<Card key={pokemon.name} pokemon={pokemon} />
                        )
                    })
                }
            </Container>

            <Pagination
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                currentPage={page}
                count={count}
                maxPerPage={perPage}
            />

        </>
    )
}
