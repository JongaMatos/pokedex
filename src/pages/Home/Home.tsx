import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { Container } from './HomeStyles';
import { Card, Loadings, Pagination } from '../../components';
import { urlToId, useQuery, useSessionApi } from '../../utils';

import paginationData from '../../Data/paginationAux.json';


export default function Home() {

  const [reloadCount, setReloadCount] = useState(0);
  const count = () => { setReloadCount(reloadCount + 1); }

  const query = useQuery();
  const getPage = () => ((typeof (query.page) === 'string') ? parseInt(query.page) : 1)
  const [currentPage] = useState(getPage())
  const [pokemons, isLoading, Reload] = useSessionApi(`pokemon/?offset=${(currentPage - 1) * paginationData.perPage}&limit=${paginationData.perPage}`)


  //ReFetch api if needed
  useEffect(() => {
    if (!pokemons && !isLoading)
      if (reloadCount < 5) {
        Reload()
        count();
      }

    // eslint-disable-next-line
  }, [isLoading]);


  if (isLoading || (!pokemons && reloadCount < 5))
    return (
      <Loadings.Spinner />
    );

  if (!pokemons)
    return (
      <div>Deu ruim</div>
    )

  return (

    <>
      <Container>
        {pokemons.results
          .map((pokemon: IPokemon) => {

            { pokemon.id = urlToId(pokemon.url) }// eslint-disable-line

            return (<Card key={pokemon.name} pokemon={pokemon} />
            )
          })
        }
      </Container>

      <Pagination
        currentPage={currentPage}
        maxPerPage={151}
      />

    </>
  )
}
