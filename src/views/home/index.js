import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './index.scss';

import Collect from './collect';
import NotFound from '@/components/notfound';

const Home = () => {
  return (
    <div className="home">
      <div className="nav-wrap">
        <div className="nav-wrap">
          <Switch>
            <Redirect exact from="/home" to="/home/collect" />
            <Route exact path="/home/collect" component={Collect} />
            <Route exact path="/home/project" component={NotFound} />
          </Switch>
        </div>
      </div>
    </div>
  ) 
}

export default Home;