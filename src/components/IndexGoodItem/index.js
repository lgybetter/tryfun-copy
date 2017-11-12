import React, { Component } from 'react'
import './IndexGoodItem.css'

class IndexGoodItem extends Component {
  render () {
    const good = this.props.good
    return (
      <div className="w-index-goodsItem">
        <img alt="" src={good.image}></img>
        <button className="w-button">
          <a>了解更多</a>
        </button>
      </div>
    )
  }
}

export default IndexGoodItem