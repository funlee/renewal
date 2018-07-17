/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-21 11:32:49
 * @Description: 共享检索-入口 
 */
import React,{ Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './index.scss';
import NotFound from '@/components/notfound';

class Share extends Component {
  render() {
    return (
      <div className="home">
        <div className="nav-wrap">
          <Switch>
            <Redirect exact from="/share" to="/share/search" />
            <Route exact path="/share/search" component={NotFound} />
            <Route exact path="/share/topic" component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Share;
