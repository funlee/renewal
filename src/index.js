/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-21 09:37:17
 * @Description: 项目入口 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './assets/style/index.scss';
import 'antd/dist/antd.css';
import './assets/scripts/axiosConfig';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
