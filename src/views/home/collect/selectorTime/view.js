import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFiltime, setSelftime } from './actions';
import { SET_FILTIME, SET_SELFTIME } from './actionsType';
import { TIMES } from './constants';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const SelectorTime = ({ selectorTime, handleSetFiltime, handleSetSelftime }) => {
  return (
    <div className="control-btn">
      {
        TIMES.map(d => (
          <span
            key={`time-${d.id}`}
            className={selectorTime.type === SET_FILTIME && selectorTime.value === d.id ? 'active time-item' : 'time-item'}
            onClick={() => handleSetFiltime(d.id)}
          >{d.name}</span>
        ))
      }
      <div className={selectorTime.type === SET_SELFTIME ? 'active time-picker' : 'time-picker'}>
        <RangePicker
          placeholder={['开始日期', '结束日期']}
          allowClear={false}
          onChange={(date, dateString) => handleSetSelftime({ startDay: dateString[0] + ' 00:00:00', endDay: dateString[1] + ' 00:00:00' })}
        />
      </div>
    </div>
  );
}

SelectorTime.propTypes = {
  handleSetFiltime: PropTypes.func.isRequired,
  handleSetSelftime: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    selectorTime: state.selectorTime
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSetFiltime: (id) => {
      dispatch(setFiltime(id));
    },
    handleSetSelftime: (data) => {
      dispatch(setSelftime(data))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectorTime);
