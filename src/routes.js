import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home'
import Step from './pages/step'
import Begin from './pages/begin'
import Question from './pages/question'

const BasicRoute = () => (
  <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/step" component={Step}/>
        <Route exact path="/begin" component={Begin}/>
        <Route exact path="/question" component={Question}/>
      </Switch>
  </HashRouter>
);


export default BasicRoute