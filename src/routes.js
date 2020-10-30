import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home'
import Form from './pages/form'
import Step from './pages/step'
import SubmitSuccess from './pages/result/SubmitSuccess'
import Result from './pages/result/Result'

const BasicRoute = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/form" component={Form}/>
        <Route exact path="/step" component={Step}/>
        <Route exact path="/submit-success" component={SubmitSuccess}/>
        <Route exact path="/result" component={Result}/>
      </Switch>
  </BrowserRouter>
);


export default BasicRoute