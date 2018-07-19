import React from 'react';
import './index.scss';

import { view as SelectorTime } from './selectorTime';
import { view as SourceCount } from './sourceCount';

const Home = () => {
  return (
    <div className="home">
      <div className="nav-wrap">
        <div className="collect">
          <div className="top">
            <SelectorTime />
          </div>
          <SourceCount />
        </div>
      </div>
    </div>
  ) 
}

export default Home;