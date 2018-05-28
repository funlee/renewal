/**
 * 文章详情弹窗页面-传 id
 *
 * @url /info/newDetail
 *
 * method：GET
 * params: 
 * id: 32位 hash 字符串
 * 
 */

module.exports = {
  "status": "success",
  "result": {
    "author": "@cname",
    "content": "@cparagraph(30, 50)",
    "contentTranslated": "@paragraph(30, 50)",
    "language": "ENG",
    "pubDate": "@datetime",
    "sourceDetail": "@ctitle(3, 5)",
    "title": "@ctitle(15, 25)",
    "titleTranslated": "@sentence(6, 8)"
  }
}