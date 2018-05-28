/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-24 10:34:43
 * @Description: 首页-地图 
 */
import React, { Component } from 'react';
import './index.scss';
import echarts from 'echarts';
import axios from 'axios';
import API from '@/assets/scripts/api';
import '@/assets/scripts/china';
import '@/assets/scripts/world';
import { nameMap, worldDataTpl, chinaDataTpl, chinaGeoCoord, worldGeoCoord } from '@/assets/scripts/DEFINES';

class MapChart extends Component {
  constructor(props) {
    super(props);
    this.echartsElement = null;
    this.state = {
      mapType: 'world', // china or world
      maxSize: 80,
      minSize: 50
    };
  }
  componentDidMount() {
    this.getData(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.getData(nextProps);
  }
  getData(config) {
    const { mapType } = this.state;
    mapType === 'world' ? this.getWorldData(config) : this.getChinaData(config);
  }
  getWorldData(config) {
    const params = this.getParams(config);
    axios.get(API.homeMapWorld, {
      params
    }).then(data => {
      let dataset = [];
      worldDataTpl.forEach(d => {
        let value = 0;
        data.forEach(item => {
          if (item.source === d.name) {
            value = item.count;
          }
        })
        dataset.push({
          name: d.name,
          value
        })
      })
      this.getOption(dataset);
    })
  }
  getChinaData(config) {
    const params = Object.assign({}, this.getParams(config), { country: '中国' });
    axios.get(API.homeMapChina, {
      params
    }).then(data => {
      let dataset = [];
      chinaDataTpl.forEach(d => {
        let value = 0;
        data.forEach(item => {
          if (item.source.slice(0, 2) === d.name.slice(0, 2)) {
            value = item.count;
          }
        })
        dataset.push({
          name: d.name,
          value
        })
      })
      this.getOption(dataset);
    })
  }
  getParams(config) {
    const { startDay, endDay, isSelfDefTime, timeType } = config;
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
    return params;
  }
  getOption(data) {
    const { maxSize, minSize, mapType } = this.state;
    const max = Math.max(...data.map(d => d.value));
    const min = Math.min(...data.map(d => d.value === 0 ? max : d.value));
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          const value = params.value ? params.value : '暂无数据';
          return `${params.name ? params.name : '其他地区'}<br/>信息总数: ${value[2]}`
        },
        backgroundColor: 'rgba(48, 141, 213, .8)',
        padding: [4, 20, 4, 20],
        textStyle: {
          fontSize: 14,
          color: '#fff'
        }
      },
      geo: {
        show: true,
        map: mapType,
        center: mapType === 'world' ? [10, 10.71] : [100.97, 36],
        zoom: 1.3,
        roam: true,
        nameMap: mapType === 'world' ? nameMap : '',
        itemStyle: {
          areaColor: '#1992ee',
          borderWidth: 1,
          borderColor: 'rgba(21, 23, 68, 1)'
        },
        emphasis: {
          label: {
            show: false
          },
          itemStyle: {
            areaColor: '#54d6ff',
            borderWidth: 1,
            borderColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      series: [{
        name: '撒点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        symbolSize: function (val) {
          const a = (maxSize - minSize) / (max - min);
          return val[2] * a;
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false
          }
        },
        itemStyle: {
          normal: {
            color: 'rgba(23, 69, 150, .5)',
            borderWidth: 2,
            borderColor: '#54d6ff',
            shadowBlur: 10,
            shadowColor: '#1550ac'
          }
        },
        zlevel: 10,
        data: this.convertData(data)
      }]
    }
    this.renderChart(option)
  }
  renderChart(option) {
    const myChart = echarts.init(this.echartsElement);
    myChart.setOption(option);
    const self = this;
    myChart.on('click', function(e) {
      if(e.name !== '中国') {
        return false;
      }
      self.setState({
        mapType: 'china'
      }, self.getChinaData(self.props))
    })
  }
  convertData(data) {
    const { mapType } = this.state;
    const targetGeoCoord = mapType === 'china' ? chinaGeoCoord : worldGeoCoord;

    const res = [];
    for (let i = 0; i < data.length; i++) {
      const geoCoord = targetGeoCoord[data[i].name];
      if (data[i].value !== 0 && geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    return res;
  }
  handleToWorld() {
    const { mapType } = this.state;
    if (mapType === 'world') {
      return false;
    }
    this.setState({
      mapType: 'world'
    }, this.getWorldData(this.props))
  }
  render() {
    const { mapType } = this.state;
    return (
      <div className="map-chart">
        <div className="bread">
          <span
            className={mapType === 'world' ? 'active' : null}
            onClick={this.handleToWorld.bind(this)}
          >世界</span>
          <span className={mapType === 'world' ? 'hidden' : 'iconfont bbd-arrow-line'} />
          <span className={mapType === 'china' ? 'active' : 'hidden'}>中国</span>
        </div>
        <div className="chart" ref={e => this.echartsElement = e} style={{ width: '100%', height: 410 }} />
      </div>
    )
  }
}

export default MapChart