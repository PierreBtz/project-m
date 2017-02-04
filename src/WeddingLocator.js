import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import logo from './assets/logo.png';
import './WeddingLocator.css';

import { NO_LOCATION } from './actions/actions';

class WeddingLocator extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  static defaultProps = {};

  handleMouseOver() {
    if (this.props.onMarkerHoverChange) {
      this.props.onMarkerHoverChange(this.props.text);
    }
  }

  handleMouseOut() {
    if (this.props.onMarkerHoverChange) {
      this.props.onMarkerHoverChange(NO_LOCATION);
    }
  }

  render() {
    const style = `clearfix float-my-children ${this.props.$hover || (this.props.locationHovered === this.props.text) ? 'hover-scale' : 'normal-scale'}`;
    return (
      <div
        className={style}
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}>
        <img width={32} height={32} src={logo} alt="logo" />
        <div>{this.props.text}</div>
      </div>
    );
  }
}

WeddingLocator.propTypes = {
  locationHovered: PropTypes.string
}

export default WeddingLocator;