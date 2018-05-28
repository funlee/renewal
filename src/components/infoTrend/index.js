/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-25 13:46:58
 * @Description: 首页-信息发布趋势 
 */
import React, { Component } from 'react';
import './index.scss';
import echarts from 'echarts';
import axios from 'axios';
import API from '@/assets/scripts/api';

class InfoTrend extends Component {
  componentDidMount() {
    // 不传参数，获取全部
    axios.get(API.homeInfoTrend)
      .then(data => this.dealData(data))
  }
  dealData(data) {
    let date = [];
    let dataset = [];
    data.forEach(d => {
      date.push(d.day.split(' ')[0]);
      dataset.push(d.count);
    })
    this.renderChart(date, dataset);
  }
  renderChart(date, dataset) {
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          },
          lineStyle: {
            color: '#0090ff'
          }
        },
        formatter: '{b}: {c}'
      },
      grid: {
        left: '1%',
        right: '6%',
        bottom: '12%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date,
        axisLabel: {
          color: '#fff',
          fontSize: 14
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        axisLabel: {
          color: '#fff',
          fontSize: 14
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      dataZoom: [{
        type: 'inside',
        start: 90,
        end: 100,
        filterMode: 'filter',
        // minSpan:10
      }, {
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '60%',
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        },
        textStyle: {
          color: '#fff'
        }
      }],
      series: [
        {
          name: '信息发布趋势',
          type: 'line',
          smooth: true,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#1649a2' // 0% 处的颜色
              }, {
                offset: 1, color: '#102d66' // 100% 处的颜色
              }],
            },
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          },
          lineStyle: {
            color: '#6adbff'
          },
          itemStyle: {
            normal: {
              color: 'rgb(106,219,255)',
              borderColor: 'rgba(106,219,255,0.2)',
              borderWidth: 20
            }
          },
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          data: dataset
        }
      ]
    };
    const myChart = echarts.init(this.echartsElement);
    myChart.setOption(option);
  }
  render() {
    return (
      <div className="info-trend">
        <p className="global-collect-title">信息发布趋势</p>
        <div className="area-chart" ref={e => this.echartsElement = e} style={{ width: '100%', height: 300 }} />
      </div>
    )
  }
}

export default InfoTrend
