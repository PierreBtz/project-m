import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import WeddingPlace from './WeddingLocator.js';

class WeddingMap extends Component {

  static defaultProps = {
      center: {lat: 44.446213, lng: 2.409792}
    };

  // investigate this
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <GoogleMap
        bootstrapURLKeys={{key: "AIzaSyDhOkVSbnmwXGvVV6LUoIhaw4laJBNdWBw"}}
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
