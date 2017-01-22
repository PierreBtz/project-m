import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import logo from './assets/logo.png';
import './WeddingLocator.css';

class WeddingLocator extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  static defaultProps = {};

  onHoverChange() {

  }

  render() {
    const style = `clearfix float-my-children ${this.props.$hover ? 'hover-scale' : 'normal-scale'}`;
    return (
      <div className = {style}>
        <img width={32} height={32} src={logo} alt="logo"/>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

export default WeddingLocator;
