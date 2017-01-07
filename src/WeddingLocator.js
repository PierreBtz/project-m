import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import logo from './assets/logo.png';
import './WeddingLocator.css';

class WeddingLocator extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  // need to investigate this
  shouldComponentUpdate = shouldPureComponentUpdate;

  static defaultProps = {};

  render() {
    return (
      <div className="clearfix float-my-children">
        <img width={32} height={32} src={logo} alt="logo"/>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

export default WeddingLocator;