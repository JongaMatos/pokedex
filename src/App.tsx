import React from 'react';
import { Home } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import './App.css';


function App() {

  return (
    <div>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:page" component={Home} />

          {/* <Route path="/pokemon" component={PokemonDetails} /> */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
