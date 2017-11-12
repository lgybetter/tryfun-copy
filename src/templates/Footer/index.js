import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  constructor (props) {
    super (props)
    this.state = {
      series: [
        {
          title: '春风产品'
        },
        {
          title: '购买产品'
        },
        {
          title: '了解产品'
        },
        {
          title: '友情链接'
        }
      ]
    }
  }
  render () {
    const series = this.state.series.map((item, index) => {
      return (
        <li key={index} className="m-instruction-list">
          {item.title}<span className="m-instruction-plus">+</span>
        </li>
      )
    })
    return (
      <section className="g-footer">
        <div className="g-footer-inner">
          <ul className="m-instruction-wrap">
            {series}
          </ul>
        </div>
        <div className="g-copyright">
          <div className="m-copyright-main">春风TryFun</div>
          <div className="m-copyright-aside">网易原创情趣用品品牌</div>
          <div className="m-copyright-aside">- 专为亚洲年轻人设计 -</div>
        </div>
        <div className="m-kefu"></div>
        <div className="m-copyright-footer">
          <p>网易公司版权所有 © 1997-2017</p>
          <p>浙ICP备15041168号</p>
          <div className="m-copyright-footer-icon">
            <span className="icon-netease"></span>
            <span className="icon-yanxuan"></span>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;