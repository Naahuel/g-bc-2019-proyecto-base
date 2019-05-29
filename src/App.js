import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { routes } from './routes';

import { Nav } from './components/Nav'
import { Home } from './components/Home'
import Recipes from './components/Recipes';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Nav />
        <div className="app-container__inner">
          <Switch>
            <Route exact path={`${routes.HOME}`} component={Home} />
            <Route exact path={`${routes.RECIPES}`} component={Recipes} />
            <Route render={() => <h1>404 - No se encontró</h1>} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
