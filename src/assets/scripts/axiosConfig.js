/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-24 09:16:05
 * @Description: axios 请求 全局配置 
 */
import axios from 'axios';

// axios.defaults.baseURL = '/poc2';

axios.interceptors.response.use(function (reponse) {
  const data = reponse.data;
  if (data.status === 'success') {
    return data.result;
  }
  return Promise.reject(reponse)
})