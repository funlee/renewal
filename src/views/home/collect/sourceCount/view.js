/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-24 10:29:31
 * @Description: 首页-情报来源 
 */
import React, { Component } from 'react';
import { getSourceType } from '@/assets/scripts/utils';
import './index.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSourceCount } from './actions'; 

const source = [
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
]

class SourceCount extends Component {
  constructor(props) {
    super(props);
    this.props.handleGetData()
  }
  getDom() {
    const { list } = this.props;
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

// SelectorTime.propTypes = {
//   handleSetFiltime: PropTypes.func.isRequired,
//   handleSetSelftime: PropTypes.func.isRequired
// };

const mapStateToProps = (state) => {
  const list = [];
  const {data = []} = state.sourceCount;
  source.forEach(ls => {
    let count = 0;
    data.forEach(d => {
      count = d.source === ls.source ? d.count : 0
    })
    list.push({
      ...ls,
      count
    })
  })
  return {
    list
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleGetData: () => {
      dispatch(fetchSourceCount());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SourceCount);