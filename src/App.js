import React, { Component } from 'react';
import Header from './templates/Header';
import Content from './templates/Content'; 
import Footer from './templates/Footer';
import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <Header></Header>
        <Content route={this.props.route}></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
