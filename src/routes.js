import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home'
import Step from './pages/step'

const BasicRoute = () => (
  <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/step" component={Step}/>
      </Switch>
  </HashRouter>
);


export default BasicRoute