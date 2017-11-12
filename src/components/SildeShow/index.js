import React, { Component } from 'react';
import './SlideShow.css'
import { setInterval } from 'timers';
import SlideIndicator from '../SlideIndicator'

class SlideShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      images: [
        {
          url: 'http://os32fgzvj.bkt.clouddn.com/1510326147854.jpg',
          zIndex: 1,
          opacity: 0
        },
        {
          url: 'http://os32fgzvj.bkt.clouddn.com/1508981942191.jpg',
          zIndex: 1,
          opacity: 0          
        },
        {
          url: 'http://os32fgzvj.bkt.clouddn.com/1508722813849.jpg',
          zIndex: 1,
          opacity: 0                    
        },
        {
          url: 'http://os32fgzvj.bkt.clouddn.com/1508646555321.jpg',
          zIndex: 1,
          opacity: 0          
        }
      ],
      currIndex: 0
    }
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({
        currIndex: (this.state.currIndex + 1) % 4
      })
    }, 8000)
  }
  render () {
    const images = this.state.images.map((image, index) => {
      const isCurrent = this.state.currIndex === index
      return (
        <div key={index} className="w-slideShow-item" style={{ zIndex: isCurrent ? 2 : image.zIndex, opacity: isCurrent ? 1 : image.opacity }}>
          <a><img alt="" className="w-slideShow-itemImg" src={image.url}></img></a>
        </div>
      )
    }
    )
    return (
      <div className="w-slideShow">
        {images}
        <div className="w-slide-indicators">
          <SlideIndicator num={4} currIndex={this.state.currIndex}></SlideIndicator>
        </div>
      </div>
    );
  }
}

export default SlideShow;