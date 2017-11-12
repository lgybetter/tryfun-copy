import React, { Component } from 'react';
import './Detail.css';

class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      images: [
        'http://tryfun.nosdn.127.net/1510302293804.jpg',
        'http://tryfun.nosdn.127.net/1510302298793.jpg',
        'http://tryfun.nosdn.127.net/1510302303786.jpg',
        'http://tryfun.nosdn.127.net/1510302309342.jpg',
        'http://tryfun.nosdn.127.net/1510302315376.jpg',
        'http://tryfun.nosdn.127.net/1510302320978.jpg'
      ]
    }
  }
  render () {
    const images = this.state.images.map((image, index) => {
      return (
        <img key={index} alt="" src={image}></img>
      )
    })
    return (
      <section>
        <div className="w-goodsdetail-title-wrap">
          <span className="w-detail-buy-title">天然系列·在云端按摩棒</span>
          <span className="w-detail-buy-price">¥249</span>
          <button className="w-button">
            <a>立即购买</a>
          </button>
        </div>
        <div className="w-detail-image">
          {images}
        </div>
      </section>
    )
  }
}

export default Detail