/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-28 11:45:32
 * @Description: 采用 express-mockjs 搭建本地 mock-server
 *  
 */

const isOnline = false;
const HOST = isOnline ? 'http://88.888.88.88:8888/project/' : 'http://localhost:8989/api/'
/**
 * 采用 view + component 的形式命名
 */
export default {
  homeSourceCount: HOST + 'info/groupInfoBySourceType', // 首页-情报来源
  homeMapChina: isOnline ? HOST + 'info/statByLocation' : HOST + 'info/statByLocation/china', // 首页-中国地图
  homeMapWorld: isOnline ? HOST + 'info/statByLocation' : HOST + 'info/statByLocation/world', // 首页-世界地图
  homeNewInfo: HOST + 'info/list', // 首页-最新信息列表
  homeInfoTrend: HOST + 'info/statByDay', // 首页-信息发布趋势
  homeHotWords: HOST + 'info/token', // 首页-热词分析
  articleId: HOST + 'info/newDetail', // 文章详情弹窗页面，传参 id
  articleInfoId: HOST + 'info/detail', // 文章详情弹窗页面，传参 infoId
}
