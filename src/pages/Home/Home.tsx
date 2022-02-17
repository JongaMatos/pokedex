import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { Container } from './HomeStyles';
import { Card } from '../../components';
import { getPokemons } from '../../services/pokemon';
// import { urlToId } from '../../utils';

export default function Home() {
  const [isLoading, setIsloading] = useState(true);
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [reloader, reload] = useState(0);


  const loadPokemon = async () => {
    const pokemons = await getPokemons();

    if (!pokemons) {
      console.log({ error: "ocorreu um erro" });
      setIsloading(true);
      reload(reloader + 1);
      return;
    }

    setPokemonList(pokemons);
    setIsloading(false);
    return;

  };


  useEffect(() => {
    loadPokemon();

    // eslint-disable-next-line
  }, [reloader]);

  if (isLoading)
    return (
      <div>Carregando</div>
    );


  return (
    <Container>

      {pokemonList.map((pokemon:IPokemon) => {
        // {pokemon.id=urlToId(pokemon.url)}
        return( <Card key={pokemon.name} pokemon={pokemon}   />
)      })}

    </Container>
  )
}
