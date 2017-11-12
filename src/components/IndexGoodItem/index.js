import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './IndexGoodItem.css'

class IndexGoodItem extends Component {
  render () {
    const good = this.props.good
    return (
      <div className="w-index-goodsItem">
        <img alt="" src={good.image}></img>
        <button className="w-button">
          <Link to={'/detail'}>了解更多</Link>
        </button>
      </div>
    )
  }
}

export default IndexGoodItem