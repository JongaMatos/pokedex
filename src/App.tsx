import React from 'react';
import { Home, PokemonDetails } from "./pages";
import { BrowserRouter, Switch,Route } from "react-router-dom"

import './App.css';


function App() {

  return (
    <div>

      <BrowserRouter>
        <Switch>
          <Route path="/"  component={Home}  />
          {/* <Route path="/pokemon" component={PokemonDetails} /> */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
