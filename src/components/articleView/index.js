/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-24 18:20:17
 * @Description: 展示文章详情 
 */
import React, { Component } from 'react';
import './index.scss';
import axios from 'axios';
import API from '@/assets/scripts/api';

class ArticleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isEnglish: false,
      showChinese: true
    };
  }
  componentDidMount() {
    const { articleId, isId } = this.props;
    /**
     * 首页-最新信息（包括查看全部里面）-查看文章详情-传 id
     * 检索查询-查询结果页-查看文章详情-传id
     * 专题监测-专题详情-情报概览-查看文章详情-传 infoId
     */
    const params = isId ? { id: articleId } : { infoId: articleId };
    const URL = isId ? API.articleId : API.articleInfoId;

    axios.get(URL, {
      params
    }).then(data => {
      this.setState({
        data,
        isEnglish: data.language === 'ENG'
      })
    })
  }
  render() {
    const { data, isEnglish, showChinese } = this.state;
    const showEnglish = isEnglish && !showChinese;
    const title = showEnglish ? data.titleTranslated : data.title;
    const content = showEnglish ? data.contentTranslated : data.content;
    return (
      <div className="article-view" ref={ele => this.rootEle = ele}>
        <h1 className="article-title">{title}</h1>
        <div className="article-info">
          <span>{showChinese ? '来源' : 'source'}：{data.sourceDetail}</span>
          <span>{showChinese ? '发布时间' : 'pubdate'}：{data.pubDate}</span>
          <span>{showChinese ? '作者' : 'author'}：{data.author ? data.author : '无'}</span>
          {isEnglish && (showChinese ? <a style={{ cursor: 'pointer' }} onClick={() => this.setState({ showChinese: false })}>查看原文（英文）</a> :
            <a style={{ cursor: 'pointer' }} onClick={() => this.setState({ showChinese: true })}>查看翻译（中文）</a>
          )}
        </div>
        <div className="article-content global-article-scrollbar">
          {content && content.split(/[\n\r]/g).map((d, i) => <p key={`content-${i}`}>{d}</p>)}
        </div>
      </div>
    )
  }
}

export default ArticleView;

ArticleView.getWordHTML = function (article) {
  return `<div>
    <h1 style="text-align:center"></h1>
  
  </div>
  `
}