import React, { Component, PropTypes } from 'react';
import { Media } from 'react-bootstrap';

import { NO_LOCATION } from './actions/actions';
import './LocationMedia.css';

class LocationMedia extends Component {

  handleMouseOver() {
    if (this.props.onHoverChange) {
      this.props.onHoverChange(this.props.mapName);
    }
  }

  handleMouseOut() {
    if (this.props.onHoverChange) {
      this.props.onHoverChange(NO_LOCATION);
    }
  }

  render() {
    return (
      <div
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}>
        <Media className={'location-media ' + (this.props.locationHovered === this.props.mapName ? 'location-media-selected' : '')}>
          <Media.Left>
            <img width={128} height={128} {...this.props} />
          </Media.Left>
          <Media.Body>
            <Media.Heading>{this.props.header}</Media.Heading>
            {this.props.body}
          </Media.Body>
        </Media>
      </div>
    )
  }
}

LocationMedia.propTypes = {
  onHoverChange: PropTypes.func.isRequired,
  locationHovered: PropTypes.string.isRequired
}

export default LocationMedia;