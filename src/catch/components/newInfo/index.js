/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-24 16:27:02
 * @Description: 首页-最新信息 
 */
import React, { Component } from 'react';
import './index.scss';
import API from '@/assets/scripts/api';
import axios from 'axios';
import Modal from '../modal';
import ArticleView from '../articleView';

class NewInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      hilighteArticle: false, // 是否展示文章详情弹窗
      articleId: undefined //查看文章详情的 文章 ID
    };
  }
  componentDidMount() {
    this.getData()
  }
  getData() {
    axios.get(API.homeNewInfo, {
      params: {
        pageSize: 20,
        pageNo: 1
      }
    }).then(data => {
      this.setState({
        data: data.list
      })
    })
  }
  getListDom() {
    const { data } = this.state;
    let dom = [];
    if (data) {
      data.forEach((d, i) => {
        dom.push(
          <li key={`list-${i}`}>
            <span title={d.title} onClick={this.showDetail.bind(this, d.id)}>{d.title}</span>
            <span title={d.sourceDetail}>{d.sourceDetail}</span>
            <span title={d.pubDate.split(' ')[0]}>{d.pubDate.split(' ')[0]}</span>
          </li>
        )
      })
    }
    return dom;
  }
  /**
   * 获取文章详情页
   * @param {String} id 
   */
  showDetail(articleId) {
    this.setState({
      hilighteArticle: true,
      articleId
    })
  }
  render() {
    const { hilighteArticle, articleId } = this.state;
    return (
      <div className="new-info">
        <p className="global-collect-title">最新信息</p>
        <ul>
          {this.getListDom()}
        </ul>
        {
          hilighteArticle && <Modal>
            <ArticleView articleId={articleId} />
            <span onClick={() => this.setState({ hilighteArticle: null })} className="global-close-btn iconfont bbd-delete" />
          </Modal>
        }
      </div>
    )
  }
}

export default NewInfo
