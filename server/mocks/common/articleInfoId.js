/**
 * 文章详情弹窗页面-传 infoId
 *
 * @url /info/detail
 *
 * method：GET
 * params: 
 * infoId: 十进制数字
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