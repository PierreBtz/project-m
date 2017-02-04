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

/* eslint-disable jsx-a11y/img-has-alt */
  render() {
    const {header, body, locationHovered, mapName, ...rest} = this.props;
    const imageProps = Object.assign({}, rest);
    delete imageProps.onHoverChange;
    return (
      <div
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}>
        <Media className={'location-media ' + (locationHovered === mapName ? 'location-media-selected' : '')}>
          <Media.Left>
            <img width={128} height={128} {...imageProps} />
          </Media.Left>
          <Media.Body>
            <Media.Heading>{header}</Media.Heading>
            {body}
          </Media.Body>
        </Media>
      </div>
    )
  }
  /* eslint-enable jsx-a11y/img-has-alt */
}

LocationMedia.propTypes = {
  onHoverChange: PropTypes.func.isRequired,
  locationHovered: PropTypes.string.isRequired
}

export default LocationMedia;