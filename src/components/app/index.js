/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-21 09:55:18
 * @Description: 页面入口 
 */
import React, { Component } from 'react';
import { HashRouter as Router, NavLink, Switch, Redirect, Route } from 'react-router-dom';
import './index.scss';

import Home from '@/views/home';
import NotFound from '../notfound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrap">
          <div className="head">
            <nav>
              <div className="father-nav">
                <NavLink to="/home">首页</NavLink>
                {/* <div className="child-nav">
                  <NavLink exact to="/home/collect">信息汇总</NavLink>
                  <NavLink exact to="/home/project">情报产品</NavLink>
                </div> */}
              </div>
              <div className="father-nav">
                <NavLink to="/share">共享检索</NavLink>
              </div>
              <div className="father-nav"><NavLink to="/null-1">智能分析</NavLink> </div>
              <div className="father-nav"><NavLink to="/null-2">应用分发</NavLink> </div>
              <div className="father-nav"><NavLink to="/null-3">评价激励</NavLink> </div>
              <div className="father-nav"><NavLink to="/null-4">培训学习</NavLink> </div>
            </nav>
            <div className="user">
              <span className="iconfont bbd-user"></span>
              <span>Admin</span>
            </div>
          </div>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/share" component={NotFound} />
            <Route path="/null-1" component={NotFound} />
            <Route path="/null-2" component={NotFound} />
            <Route path="/null-3" component={NotFound} />
            <Route path="/null-4" component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;