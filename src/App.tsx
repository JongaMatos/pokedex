import React from 'react';
import { Home } from "./pages";
import { Switch, Route, useParams, RouteComponentProps } from "react-router-dom"

import './App.css';

interface IRouteInfo {

  page: string;
}

function App() {


  return (
    <Switch>
      <Route path="/:page" render={(props: RouteComponentProps<IRouteInfo>) => {

        const { page } = props.match.params
        return <Home page={parseInt(page)} />
      }} />
      <Route path="/" render={() => <Home page={1} />} />

      {/* <Route path="/pokemon" component={PokemonDetails} /> */}
    </Switch>
  );
}

export default App;
