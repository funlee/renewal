/**
 * 首页-热词分析
 *
 * @url /info/token
 *
 * method：GET
 * params: 
 * pagaSize: 300
 * pageNo: 1
 * 
 */

module.exports = {
  "status": "success",
  "result": {
    "list|300": [{
      "text": "@ctitle(3, 5)",
      "frequency|60-1000": 60
    }]
  }
}