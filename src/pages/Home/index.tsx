import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './style';
import { Card } from '../../components';
import { getPokemons } from '../../services/pokemon';

export default function Home() {
  const [isLoading, setIsloading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
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

      {pokemonList.map((pokemon, index) => (
        <Card key={index} index={index + 1} pokemon={pokemon}   />
      ))}

    </Container>
  )
}
