import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderIcon from '../../components/HeaderIcon'
import './Header.css';

class Header extends Component {
  render () {
    return (
      <section className="g-header">
        <HeaderIcon></HeaderIcon>
        <Link className="icon-logo" to={'/about'}></Link>
      </section>
    );
  }
}

export default Header