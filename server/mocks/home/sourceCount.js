/**
 * 首页-情报来源总数统计
 *
 * @url /info/groupInfoBySourceType
 *
 * method：GET
 * params:
 * 如为固定时间则：dateType=today or yesterday or week or month
 * 如为自定义时间则：startDay=2018-05-01&endDay=2018-06-18
 * 
 */

module.exports = {
  "status": "success",
  "result|4": [{
    "count|10-500": 1,
    "source|+1": ['OPEN', 'TECH', 'GREY', 'HUMAN']
  }]
}