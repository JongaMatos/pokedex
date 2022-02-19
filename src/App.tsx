import React from 'react';
import { Home } from "./pages";
import {  Switch, Route } from "react-router-dom"

import './App.css';


function App() {

  return (
        <Switch>

          <Route path="/" exact render={() => <Home />} />
          <Route path="/:page/" render={() => <Home />} />

          {/* <Route path="/pokemon" component={PokemonDetails} /> */}
        </Switch>
  );
}

export default App;
