/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-21 23:05:26
 * @Description: 信息汇总页面 
 */
import React from 'react';
import './index.scss';

import { view as SelectorTime } from './selectorTime';
import { view as SourceCount } from './sourceCount';

const Collect = () => {
  return (
    <div className="collect">
      <div className="top">
        <SelectorTime />
      </div>
      <SourceCount />
    </div>
  )
}

export default Collect;
