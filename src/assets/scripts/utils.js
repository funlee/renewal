/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-23 09:43:40
 * @Description: 公用方法集 
 */
/**
 * 根据 source 的代号，获取中文名称
 * @param {String} source 
 */
export function getSourceType(source) {
  let sourceType;
  switch (source) {
    case 'OPEN':
      sourceType = '开源产业';
      break;
    case 'TECH':
      sourceType = '技术产业';
      break;
    case 'HUMAN':
      sourceType = '人力产业';
      break;
    case 'GREY':
      sourceType = '灰色产业';
      break;
    default:
      sourceType = '未知产业';
      break;
  }
  return sourceType;
}