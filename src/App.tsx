import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom"

import { LoadPokemonContext } from './context';

import { Home, ListPokemons, PokemonTypes } from "./pages";
import { PikachuLoading } from "./components";
import './App.css';



function App() {
  

  const { detailedPokemons } = useContext(LoadPokemonContext);
  return (
    <Switch>


      <Route path="/" exact render={() => <Home />} />
      
      <Route path="/type" exact render={() => <PokemonTypes />} />

      <Route path="/pokemons/" exact render={() => {
            if (detailedPokemons) return <ListPokemons  />
            return <PikachuLoading />
        }} />
     


    </Switch>
  );
}

export default App;
