// import React, { useContext } from 'react';
import React from "react";
import { Home } from "./pages";
import { Switch, Route } from "react-router-dom"
// import { LoadPokemonContext } from './context';
import { TypeRoutes, PokemonsRoutes } from './Routes';


import './App.css';

// interface IRouteInfo {
//   page?: string;
//   type?: string
// }

function App() {
  // const { detailedPokemons, filterPokemonByType } = useContext(LoadPokemonContext);
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />

      <>
        <PokemonsRoutes />
        <TypeRoutes />
      </>


    </Switch>
  );
}

export default App;
