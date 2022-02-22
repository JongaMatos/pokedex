import React, { useContext } from 'react';
import { ListPokemons, UnderConstruction, Home, PokemonTypes } from "./pages";
import { Switch, Route, RouteComponentProps } from "react-router-dom"
import { LoadPokemonContext } from './context';
import { Loadings } from './components';

import './App.css';

interface IRouteInfo {
  page?: string;
  type?: string
}

function App() {
  const { detailedPokemons, filterPokemonByType } = useContext(LoadPokemonContext);
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/type" exact render={() => <PokemonTypes />} />

      <Route path="/type/:type" exact render={(props: RouteComponentProps<IRouteInfo>) => {

        const { type } = props.match.params;
        const { filteredPokemon, length } = filterPokemonByType(type || "");

        if (!detailedPokemons)
          return <Loadings.Spinner />
        if (!length) return <PokemonTypes />

        return <ListPokemons count={length} pokemons={filteredPokemon} page={1} filter={type} />

      }} />
      
      <Route path="/type/:type/:page" render={(props: RouteComponentProps<IRouteInfo>) => {

        const { type, page } = props.match.params;
        const { filteredPokemon, length } = filterPokemonByType(type || "");

        if (!detailedPokemons)
          return <Loadings.Spinner />
        if (!length) return <PokemonTypes />

        return <ListPokemons count={length} pokemons={filteredPokemon} page={(page && parseInt(page)) || 1} filter={type} />

      }} />







      <Route path="/pokemons/" exact render={() => {
        if (detailedPokemons) return <ListPokemons count={detailedPokemons.length} pokemons={detailedPokemons} page={1} />
        return <Loadings.Spinner />
      }} />

      <Route path="/pokemons/:page" render={(props: RouteComponentProps<IRouteInfo>) => {

        const { page } = props.match.params
        if (page)
          if (detailedPokemons) return <ListPokemons count={detailedPokemons.length} pokemons={detailedPokemons} page={parseInt(page)} />
        return <Loadings.Spinner />
      }} />
      {/* <Route path="/pokemon" component={PokemonDetails} /> */}
    </Switch>
  );
}

export default App;
