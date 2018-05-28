/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-23 10:09:15
 * @Description: 接口地址配置 
 * 采用 easy mock
 * URL: https://www.easy-mock.com/
 * 
 * 已废弃：2015-05-28 改为采用 express-mockjs 搭建的 mock-server
 */
const isOnline = false;
const HOST = isOnline ? 'http://88.888.88.88:8888/project/' : 'https://www.easy-mock.com/mock/5b05316329c4976dc91e8c33/renewal/'
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
