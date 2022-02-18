import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { Container } from './HomeStyles';
import { Card, Loadings, Pagination } from '../../components';
import { urlToId, useQuery, useSessionApi } from '../../utils';

export default function Home() {

  const [pokemons, isLoading, Reload] = useSessionApi("pokemon/?offset=0&limit=30")
  // const [pokemons, isLoading, Reload] = useSessionApi("robson");
  const [reloadCount, setReloadCount] = useState(0);
  const query = useQuery();

  const count = () => { setReloadCount(reloadCount + 1); }



  const getPage = () => ((typeof (query.page) === 'string') ? parseInt(query.page) : 1)
  const [currentPage, setCurrentPage] = useState(getPage())

  useEffect(() => {
    if (!pokemons && !isLoading)
      if (reloadCount < 5) {
        Reload()
        count();
        console.log(pokemons);
      }

    // eslint-disable-next-line
  }, [isLoading]);

  useEffect(() => {
  
    if (getPage() !== currentPage)
      setCurrentPage(getPage());

    // eslint-disable-next-line
  }, [query]);

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

        {pokemons.results.map((pokemon: IPokemon) => {

          { pokemon.id = urlToId(pokemon.url) }// eslint-disable-line

          return (<Card key={pokemon.name} pokemon={pokemon} />
          )
        })}
      </Container>

      <Pagination
        currentPage={currentPage}
        maxPerPage={151}
      />

    </>
  )
}
