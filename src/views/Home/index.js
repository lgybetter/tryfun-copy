import React, { Component } from 'react';
import SlideShow from '../../components/SildeShow'
import IndexGoodItem from '../../components/IndexGoodItem'
import './Home.css'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      goods: [
        {
          image: 'http://tryfun.nosdn.127.net/1508862215702.jpg'
        },
        {
          image: 'http://tryfun.nosdn.127.net/1508901625379.jpg'
        },
        {
          image: 'http://tryfun.nosdn.127.net/1508646645819.jpg'
        },
        {
          image: 'http://tryfun.nosdn.127.net/1508722841416.jpg'
        },
        {
          image: 'http://tryfun.nosdn.127.net/1508862237268.jpg'
        }
      ]
    }
  } 
  render ()  {
    const goods = this.state.goods.map((good, index) => {
      return (
        <IndexGoodItem key={index} good={good}></IndexGoodItem>
      )
    })
    return (
      <section>
        <SlideShow></SlideShow>
        {goods}
        <div className="w-jumbotron">
          <a><img alt="" src="http://tryfun.nosdn.127.net/1508646444085.jpg"></img></a>
        </div>
      </section>
    );
  }
}

export default Home;