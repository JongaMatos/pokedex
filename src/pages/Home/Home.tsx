import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './HomeStyles';
import { Card, Loadings, Pagination } from '../../components';
import { getPokemonsPagination } from '../../services/pokemon';
import { urlToId, useQuery } from '../../utils';

export default function Home() {
  const [isLoading, setIsloading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [reloader, reload] = useState(0);

  const query = useQuery();
  const [currentPage, setCurrentPage] = useState(typeof (query.page) === 'string' ? parseInt(query.page) : 1)


  const loadPokemon = async () => {

    // await getCurrentPage();
    // console.log({ currentPage });
    const pokemons = await getPokemonsPagination(currentPage);

    if (!pokemons) {
      setIsloading(true);
      reload(reloader + 1);
      return;
    }

    setPokemonList(pokemons.results);
    setIsloading(false);
    return;

  };


  useEffect(() => {
    setIsloading(true);
    loadPokemon();

    // eslint-disable-next-line
  }, [reloader, currentPage]);

  if (isLoading)
    return (
      <Loadings.Spinner />
    );


  return (
    <>

      <Container>

        {pokemonList.map((pokemon: IPokemon) => {

          { pokemon.id = urlToId(pokemon.url) }// eslint-disable-line

          return (<Card key={pokemon.name} pokemon={pokemon} />
          )
        })}
      </Container>

      <Pagination
        currentPage={currentPage}
        maxPerPage={151}
        refresher={setCurrentPage}
      />
      
    </>
  )
}
