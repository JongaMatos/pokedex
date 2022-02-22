import React from 'react';
import { ListPokemons, UnderConstruction, Home } from "./pages";
import { Switch, Route, RouteComponentProps } from "react-router-dom"
import { useApi } from './utils';
import { Loadings } from './components';

import './App.css';

interface IRouteInfo {
  page: string;
}

function App() {
  const [response] = useApi("pokemon/?offset=0&limit=100000");

  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/Types" render={() => <UnderConstruction />} />


      <Route path="/pokemons/" exact render={() => {

        if (response)
          return <ListPokemons count={response.count} pokemons={response.results} page={1} />
          
        return <Loadings.Spinner />
      }} />

      <Route path="/pokemons/:page" render={(props: RouteComponentProps<IRouteInfo>) => {

        const { page } = props.match.params
        if (response)
          return <ListPokemons count={response.count} pokemons={response.results} page={parseInt(page)} />

        return <Loadings.Spinner />
      }} />

      {/* <Route path="/pokemon" component={PokemonDetails} /> */}
    </Switch>
  );
}

export default App;
