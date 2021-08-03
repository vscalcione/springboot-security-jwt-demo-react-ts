import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { LoginPageComponent } from './components/login/LoginPageComponent';
import { DashboardComponent } from './components/dashbaord/DashbaordComponent';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPageComponent} />
        <Route exact path="/dashboard" component={DashboardComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
