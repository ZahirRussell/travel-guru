import React, { createContext, useState } from 'react';

import {  
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import Book from './components/Book/Book';
import Home from './components/Home/Home';
import Hotel from './components/Hotel/Hotel';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import TopMenu from './components/TopMenu/TopMenu';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>    
      <Router>
            <TopMenu></TopMenu>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/book/:id">
                <Book />
              </Route>
               <PrivateRoute path="/hotel/:locationName">
              <Hotel />
              </PrivateRoute>               
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
        </Router>    
      </UserContext.Provider>

  
  );
}

export default App;
