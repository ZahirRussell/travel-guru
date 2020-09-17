import React from 'react';
import {  
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import Book from './components/Book/Book';
import Home from './components/Home/Home';
import Hotel from './components/Hotel/Hotel';
import Login from './components/Login/Login';
import TopMenu from './components/TopMenu/TopMenu';

function App() {
  return (
    <Router>
          <TopMenu></TopMenu>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/book/:placeType/:description">
              <Book />
            </Route>
            <Route path="/hotel/:placeType">
              <Hotel />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
