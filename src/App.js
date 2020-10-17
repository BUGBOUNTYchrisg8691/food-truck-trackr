import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';

import Header from "./components/Header/Header"
import SignIn from "./components/SignIn/SignIn"
import SignUp from "./components/SignUp/SignUp"

function App() {
  return (
    <>
      <CssBaseline />
      <Header />      

      <Switch>
        <Route path="/login/signup">
          <SignUp />
        </Route>
        <Route path="/login/signin">
          <SignIn />
        </Route>
      </Switch> 
    </>
  );
}

export default App;
