import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Search from './components/search/search'
import DrinksApi from './components/api/api'
import FooterDrinks from './components/footer/footer'
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/search">
            <Search />
        </Route>
        <Route exact path="/api">
            <DrinksApi />
        </Route>
      </Switch>
      <FooterDrinks/>
    </div>
  );
}

export default App;
