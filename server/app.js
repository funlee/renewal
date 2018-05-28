/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-28 11:20:46
 * @Description: 
 * 1.采用 express-mockjs 的 mock-server
 * 2.github地址：https://github.com/52cik/express-mockjs
 * 3.注意此处的 mockjs 写法，请参考如下示例写法：http://mockjs-lite.js.org/docs/examples.html
 * 4.模拟数据全部写在 mocks 文件夹里面，单个文件名与 '@/assets/scripts/api.js' 中的属性名相对应
 */
const path = require('path');
const http = require('http');
const express = require('express');
const mockjs = require('express-mockjs');

const port = 8989;
const app = express();
const server = http.createServer(app);

app.use('/api', mockjs(path.join(__dirname, 'mocks')));

server.listen(port);
server.on('listening', () => {
  console.log(`API Document is starting`);
  console.log(`API Listening on http://localhost: ${port}/api`);
})
