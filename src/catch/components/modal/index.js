/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-05-24 17:41:37
 * @Description: 弹窗-遮罩底层
 */
import React, { Component } from 'react';
import './index.scss';

class Modal extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.blurId !== this.props.blurId) {
      this.unBlur(prevProps.blurId);
      this.blur(this.props.blurId);
    }
  }
  componentDidMount() {
    document.body.appendChild(this.mask);
    this.blur(this.props.blurId);
    document.body.style.overflow = 'hidden';
  }
  componentWillUnmount() {
    this.root.appendChild(this.mask);
    this.unBlur(this.props.blurId);
    document.body.style.overflow = '';
  }
  blur(id) {
    id = id || Modal.blurId;
    const ele = document.getElementById(id);
    if (!ele) {
      return
    }
    ele.style.filter = `blur(${this.props.blurPx})`;
  }
  unBlur(id) {
    id = id || Modal.blurId;
    const ele = document.getElementById(id);
    if (!ele) {
      return;
    }
    ele.style.filter = '';
  }
  render() {
    const modalStyle = {};
    const { fullScreen, component: childComponent, children, defStyle } = this.props;
    if (fullScreen) {
      Object.assign(modalStyle, {
        position: 'fixed',
        top: 0,
        left: '50%',
        width: '100vw',
        height: '100vh',
        'minWidth': '1200px',
        'overflow': 'auto',
        'transform': 'translateX(-50%)'
      })
    } else {
      // 覆盖或者跟踪某个元素
      Object.assign(modalStyle, {
        position: 'absolute',
        top: 0,
        left: 0
      })
    }
    return (
      <span ref={ele => this.root = ele}>
        <div
          ref={ele => this.mask = ele}
          className={`content-modal ${this.props.className}`}
          style={modalStyle}
        >
          <div className="modal-inner" style={defStyle}>
            {childComponent ? <childComponent {...this.props} /> : children}
          </div>
        </div>
      </span>
    )
  }
}

export default Modal;

Modal.defaultProps = {
  blurPx: '5px',
  fullScreen: true,
}

Modal.blurId = 'root'
