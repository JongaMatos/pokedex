import React from 'react';
import { Home } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import './App.css';


function App() {

  return (
    <div>

      <BrowserRouter>
        <Switch>

          <Route path="/pokedex/" exact render={() => <Home />} />
          <Route path="/pokedex/pokemons/:page/" render={() => <Home />} />

          {/* <Route path="/pokemon" component={PokemonDetails} /> */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
