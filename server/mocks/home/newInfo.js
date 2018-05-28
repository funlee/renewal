/**
 * 首页-最新信息
 *
 * @url /info/list
 *
 * method：GET
 * params: 
 * pagaSize: 20
 * pageNo: 1
 * 
 */

module.exports = {
  "status": "success",
  "result": {
    "list|20": [{
      "id": "@guid",
      "infoId": "@id",
      "sourceDetail": "@csentence(6, 12)",
      "title": "@csentence(12, 20)",
      "pubDate": "@datetime()"
    }]
  }
}