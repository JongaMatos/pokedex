import React from 'react';
import { Home } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import './App.css';


function App() {

  return (
    <div>

      <BrowserRouter>
        <Switch>
<<<<<<< HEAD
          <Route path="/"  component={Home}  />
=======
          <Route path="/" exact component={Home} />
          <Route path="/:page" component={Home} />

>>>>>>> 3e1b89ba29089ebbf61a38636b0d631a1c826204
          {/* <Route path="/pokemon" component={PokemonDetails} /> */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
