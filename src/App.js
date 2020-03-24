import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Search from './components/search/search'
import DrinksApi from './components/api/api'
import Drink from './components/search/drink/drink'
import FooterDrinks from './components/footer/footer'
import {
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios'

class App extends Component{
  constructor(){
      super();
      this.state = {
          data:[]
      }
  }

  componentDidMount(){
      axios.get(`https://apistear-drinks.herokuapp.com/drinks`)
      .then((res) =>{
          this.setState({
              data: res.data
          })
      })
      .catch((err) => {
          console.log(err)
      })
  }

  render(){
    return (
      <div className="App">
        <Navbar/>
  
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/drinks">
              <Search />
          </Route>
          <Route exact path="/api">
              <DrinksApi />
          </Route>
          {this.state.data.map(item => ( 
              <Route key={item._id} exact path={`/drinks/id/${item._id}` }>
                  <Drink id={item._id}/>
              </Route>              
          ))}
        </Switch>
  
        <FooterDrinks/>
      </div>
    );
  }
  
}

export default App;
