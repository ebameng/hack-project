import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home'
import Step from './pages/step'

const BasicRoute = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/step" component={Step}/>
      </Switch>
  </BrowserRouter>
);


export default BasicRoute