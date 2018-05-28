/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-25 14:38:22
 * @Description: 首页-热词分析 
 */
import React, { Component } from 'react';
import './index.scss';
import axios from 'axios';
import API from '@/assets/scripts/api';
import cloud from 'd3-cloud';

class HotWords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataType: 'all', // 默认展示 全部
      typeLists: [
        {
          name: '全部',
          id: 'all'
        },
        {
          name: '时间',
          id: 'Time'
        },
        {
          name: '人物',
          id: 'Person'
        },
        {
          name: '组织',
          id: 'Organization'
        },
        {
          name: '职位',
          id: 'Job'
        },
        {
          name: '地点',
          id: 'Location'
        },
        {
          name: '来源',
          id: 'Source'
        },
        {
          name: '物品',
          id: 'Object'
        }
      ],
      data: [],
      width: 1400,
      height: 340,
      maxSize: 60,
      minSize: 18
    };
  }
  componentDidMount() {
    this.getData();
  }
  getTypeLists() {
    const { dataType, typeLists } = this.state;
    const dom = [];
    typeLists.forEach((d, i) => {
      dom.push(
        <li key={`type-${i}`} className={d.id === dataType ? 'active' : null} onClick={this.handleChangeType.bind(this, d.id)}>
          {d.name}
        </li>
      )
    })
    return dom;
  }
  handleChangeType(dataType) {
    if (dataType === this.state.dataType) {
      return false;
    }
    this.setState({
      dataType
    }, () => this.getData())
  }
  getData() {
    const { dataType } = this.state;
    const params = {
      pageSize: 300,
      pageNo: 1
    }
    if (dataType !== 'all') {
      params.type = dataType
    }
    axios.get(API.homeHotWords, {
      params
    }).then(data => {
      this.setState({
        data: data.list,
        width: this.chart.clientWidth,
        height: this.chart.clientHeight
      })
    })
  }
  getWords() {
    const { width, height, data, maxSize, minSize } = this.state;
    if (data.length === 0) { return false }
    let dom;
    const max = Math.max(...data.map(d => d.frequency))
    const min = Math.min(...data.map(d => d.frequency))
    const layout = cloud()
      .size([width, height])
      .words(data.map(d => {
        return {
          text: d.text,
          size: parseInt((maxSize - minSize) / (max - min) * d.frequency + minSize - (maxSize - minSize) / (max - min) * min, 10)
        }
      }))
      .padding(5)
      .rotate(() => ~~(Math.random() * 2) * 90)
      .fontSize(d => d.size)
      .on('end', dataset => {
        dom = dataset.map((d, i) => (
          <text
            key={`word-${i}`}
            textAnchor="middle"
            fontSize={d.size}
            fill="#fff"
            transform={`translate(${d.x},${d.y})rotate(${d.rotate})`}
            cursor="pointer"
          >
            {d.text}
          </text>
        ))
      })
    layout.start();
    return dom;
  }
  render() {
    const { width, height } = this.state;
    return (
      <div className="hot-words">
        <p className="global-collect-title">热词分析</p>
        <div className="hot-chart">
          <ul className="chart-control">
            {this.getTypeLists()}
          </ul>
          <svg
            style={{ flex: 1 }}
            ref={e => this.chart = e}
          >
            <g transform={`translate(${width / 2}, ${height / 2})`}>
              {this.getWords()}
            </g>
          </svg>
        </div>
      </div>
    )
  }
}

export default HotWords
