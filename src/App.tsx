import React from 'react';
import { Home, Types } from "./pages";
import { Switch, Route, RouteComponentProps } from "react-router-dom"

import './App.css';

interface IRouteInfo {

  page: string;
}

function App() {


  return (
    <Switch>
      <Route path="/" exact render={() => <Home page={1} />} />
      <Route path="/Types" render={() => <Types />} />


      <Route path="/pokemons/" exact render={() => <Home page={1} />} />
      <Route path="/pokemons/:page" render={(props: RouteComponentProps<IRouteInfo>) => {

        const { page } = props.match.params
        return <Home page={parseInt(page)} />
      }} />

      {/* <Route path="/pokemon" component={PokemonDetails} /> */}
    </Switch>
  );
}

export default App;
