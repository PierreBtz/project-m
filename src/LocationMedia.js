import React, { Component } from 'react';
import { Media } from 'react-bootstrap';

class LocationMedia extends Component {

  handleHoverOn() {

  }

  handleHoverOff() {

  }

  render() {
    return (
      <div>
        <Media
          onMouseEnter={this.handleHoverOn}
          onMouseLeave={this.handleHoverOff}>
            <Media.Left>
              <img width={128} height={128} {...this.props}/>
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

export default LocationMedia;