import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './HomeStyles';
import { Card, Loadings, Pagination } from '../../components';
import { urlToId, useApi } from '../../utils';
import { Freeze } from 'react-freeze';
import paginationData from '../../Data/paginationAux.json';

interface IParams {
  page?: string
}

export default function Home() {
  const { page }: IParams = useParams();
  const { perPage } = paginationData;

  const [currentPage, setPage] = useState(page ? parseInt(page) : 1);

  const [reloadCount, setReloadCount] = useState(0);
  const count = () => { setReloadCount(reloadCount + 1); }

  const [pokemons, isLoading, Reload, NewUrl] = useApi(`pokemon/?offset=${(currentPage - 1) * perPage}&limit=${perPage}`)

  //Set current page on param change
  useEffect(() => {
    setPage(page ? parseInt(page) : 1);
  }, [page])
  //Set new url on currentPage change
  useEffect(() => {
    NewUrl(`pokemon/?offset=${(currentPage - 1) * perPage}&limit=${perPage}`);

    // eslint-disable-next-line
  }, [currentPage])

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
      <Freeze freeze={isLoading}>
      </Freeze>

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
        currentPage={currentPage}
        maxPerPage={perPage}
      />

    </>
  )
}
