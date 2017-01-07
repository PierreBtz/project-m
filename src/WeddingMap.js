import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import WeddingPlace from './WeddingLocator.js';

import secret from './private/secret-config.json';

class WeddingMap extends Component {

  static defaultProps = {
      center: {lat: 0, lng: 0}
    };

  // investigate this
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <GoogleMap
        bootstrapURLKeys={secret}
        defaultCenter={this.props.center}
        defaultZoom={12}>
        <WeddingPlace lat={0} lng={0} text={'Soirée'} />
        <WeddingPlace lat={0} lng={0} text={'Cérémonies'}  />
        <WeddingPlace lat={0} lng={0} text={'Brunch'}  />
      </GoogleMap>
    );
  }
}

export default WeddingMap;
