import React, { Component } from 'react';
import './SlideIndicator.css'

class SlideIndicator extends Component {
  render () {
    const num = this.props.num
    const currIndex = this.props.currIndex
    const indicators = []
    for (let i = 0; i < num; i++) {
      const isCurrent = i === currIndex
      const bindClass = 'w-slide-indic-btn' + (isCurrent ? ' w-slide-indic-btn-active' : '')
      indicators.push(
        (<li key={i} className={bindClass}></li>)
      )
    }
    return (
      <ul className="w-silde-indic">{indicators}</ul>
    )
  }
}

export default SlideIndicator