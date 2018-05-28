/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-21 23:05:26
 * @Description: 信息汇总页面 
 * @Tip: defaultRangePicker: [moment().subtract(30, 'days'), moment()]
 */
import React, { Component } from 'react';
import './index.scss';
import SourceCount from '@/components/sourceCount';
import MapChart from '@/components/mapChart';
import NewInfo from '@/components/newInfo';
import InfoTrend from '@/components/infoTrend';
import HotWords from '@/components/hotWords';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

class Collect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeList: [
        { name: '今日', id: 'today' }, { name: '昨日', id: 'yesterday' },
        { name: '本周', id: 'week' }, { name: '本月', id: 'month' }
      ],
      timeIndex: 0, // 当前时间，默认今日， 4为自定义时间
      isSelfDefTime: false, // 当前时间参数是否为自定义时间
      startDay: null,
      endDay: null
    }
  }
  getTimeListDom() {
    const { timeList, timeIndex } = this.state;
    const dom = [];
    timeList.forEach((d, i) => {
      dom.push(
        <span
          key={`time-${i}`}
          className={timeIndex === i ? 'active time-item' : 'time-item'}
          onClick={this.changeTimeIndex.bind(this, i)}
        >{d.name}</span>
      )
    });
    return dom;
  }
  /**
   * 改变时间参数
   * @param {number} i 
   */
  changeTimeIndex(i) {
    const { timeIndex } = this.state;
    if (i === timeIndex) {
      return false;
    };
    this.setState({
      isSelfDefTime: false,
      timeIndex: i
    });
  }
  getSelfDefTime(date, dateString) {
    this.setState({
      startDay: dateString[0],
      endDay: dateString[1],
      isSelfDefTime: true,
      timeIndex: 4 // 为自定义时间
    });
  }
  render() {
    const { isSelfDefTime, timeList, timeIndex, startDay, endDay } = this.state;
    return (
      <div className="collect">
        <div className="top">
          <div className="control-btn">
            {this.getTimeListDom()}
            <div className={timeIndex === 4 ? 'active time-picker' : 'time-picker'}>
              <RangePicker
                placeholder={['开始日期', '结束日期']}
                onChange={(date, dateString) => this.getSelfDefTime(date, dateString)}
              />
            </div>
          </div>
        </div>
        <SourceCount isSelfDefTime={isSelfDefTime} timeType={timeList[timeIndex]} startDay={startDay} endDay={endDay} />
        <div className="item">
          <MapChart isSelfDefTime={isSelfDefTime} timeType={timeList[timeIndex]} startDay={startDay} endDay={endDay} />
        </div>
        <div className="item">
          <NewInfo />
        </div>
        <div className="item">
          <InfoTrend />
        </div>
        <div className="item">
          <HotWords />
        </div>
      </div>
    )
  }
}

export default Collect