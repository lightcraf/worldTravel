import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TourMenu from './TourMenu';
import Tour from './Tour';

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route exact path='/tours' component={TourMenu}/>
    <Route path='/tours/:number' component={Tour}/>
  </Switch>
);

export default Roster;