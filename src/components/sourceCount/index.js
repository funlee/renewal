/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-24 10:29:31
 * @Description: 首页-情报来源 
 */
import React, { Component } from 'react';
import { getSourceType } from '@/assets/scripts/utils';
import './index.scss';
import API from '@/assets/scripts/api';
import axios from 'axios';
class SourceCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: [
        {
          source: 'OPEN',
          icon: 'ky-icon'
        },
        {
          source: 'GREY',
          icon: 'hs-icon'
        },
        {
          source: 'TECH',
          icon: 'js-icon'
        },
        {
          source: 'HUMAN',
          icon: 'rl-icon'
        }
      ],
      list: []
    };
  }
  componentDidMount() {
    this.getData(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.getData(nextProps);
  }
  getData(config) {
    const { startDay, endDay, isSelfDefTime, timeType } = config;
    const { source } = this.state;
    const list = [];
    let params;
    if (isSelfDefTime) {
      params = {
        startDay, endDay
      }
    } else {
      params = {
        dateType: timeType.id
      }
    }
    axios.get(API.homeSourceCount, {
      params
    }).then(data => {
      if (data.length > 0) {
        source.forEach(ls => {
          let count = 0;
          data.forEach(d => {
            if (d.source === ls.source) {
              count = d.count;
            }
          });
          list.push({
            source: ls.source,
            icon: ls.icon,
            count
          });
        });
      } else {
        source.forEach(ls => {
          list.push({
            source: ls.source,
            icon: ls.icon,
            count: 0
          });
        });
      }
      this.setState({
        list
      })
    })
  }
  getDom() {
    const { list } = this.state;
    const dom = [];
    list.forEach((d, i) => {
      dom.push(
        <div className="list" key={`source-${i}`}>
          <p className="list-name">{getSourceType(d.source)}</p>
          <div className="foot">
            <span className={`foot-icon ${d.icon}`} />
            <div className="foot-text">
              <p className={d.count === 0 ? 'total active' : 'total'}>{d.count === 0 ? '暂无数据' : d.count}</p>
            </div>
          </div>
        </div>
      )
    });
    return dom;
  }
  render() {
    return (
      <div className="source-count">
        {this.getDom()}
      </div>
    )
  }
}

export default SourceCount