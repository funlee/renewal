/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-21 11:30:33
 * @Description: 首页-入口 
 */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './index.scss';
import Collect from './collect';
import NotFound from '@/components/notfound';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="nav-wrap">
          <Switch>
            <Redirect exact from="/home" to="/home/collect" />
            <Route exact path="/home/collect" component={Collect} />
            <Route exact path="/home/project" component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Home;
