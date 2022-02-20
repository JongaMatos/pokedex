import React, { useState, useEffect } from 'react';
import { Container } from './HomeStyles';
import { Card, Loadings, Pagination } from '../../components';
import { urlToId, useApi } from '../../utils';
import paginationData from '../../Data/paginationAux.json';
import { IPokemon } from '../../global';

interface IProps {
  page: number
}

export default function Home({ page }: IProps) {

  const { perPage } = paginationData;

  const [reloadCount, setReloadCount] = useState(0);
  const count = () => { setReloadCount(reloadCount + 1); }

  const [pokemons, isLoading, Reload, NewUrl] = useApi(`pokemon/?offset=${page - 1 * perPage}&limit=${perPage}`, perPage * 9)

  useEffect(() => {
    NewUrl(`pokemon/?offset=${(page - 1) * perPage}&limit=${perPage}`);

    // eslint-disable-next-line
  }, [page])

  //ReFetch api if needed
  useEffect(() => {
    if (!pokemons && !isLoading)
      if (reloadCount < 5) {
        Reload()
        count();
      }

    // eslint-disable-next-line
  }, [isLoading]);


  if ((!pokemons && reloadCount >= 5))
    return (
      <div>Deu ruim</div>
    )

  return (
    <>
      {isLoading ? <Loadings.Spinner /> : <></>}

      <Container isLoading={isLoading}>
        {pokemons && pokemons.results
          .map((pokemon: IPokemon) => {

            { pokemon.id = urlToId(pokemon.url) }// eslint-disable-line

            return (<Card key={pokemon.name} pokemon={pokemon} />
            )
          })
        }
      </Container>

      <Pagination
        isLoading={isLoading}
        currentPage={page}
        maxPerPage={perPage}
      />

    </>
  )
}
