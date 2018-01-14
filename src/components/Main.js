import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Tours from './Tours';
import Services from './Services';
import Contact from './Contact';
import Login from './Login';
import Join from './Join';
import RequestForm from './RequestForm';

const Main = () => (
  <main className="main" role="main">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/tours' component={Tours}/>
      <Route path='/services' component={Services}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/login' component={Login}/>
      <Route path='/join' component={Join}/>
      <Route path='/request' component={RequestForm}/>
    </Switch>
  </main>
);

export default Main;