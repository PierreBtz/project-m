import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import WeddingPlace from './WeddingLocator.js';
import weddingMapStyle from './WeddingMapStyle.json';

import secret from './private/secret-config.json';
import location from './private/location.json';

class WeddingMap extends Component {

  static defaultProps = {
      center: {lat: location.center.lat, lng: location.center.lng}
    };

  // investigate this
  shouldComponentUpdate = shouldPureComponentUpdate;

  mapOptions(maps) {

    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      // http://www.mapstylr.com/style/light-monochrome/
      styles: weddingMapStyle
    }
  }

  render() {
    return (
       <GoogleMap
        bootstrapURLKeys={secret}
        defaultCenter={this.props.center}
        defaultZoom={12}
        options={this.mapOptions}>
        <WeddingPlace lat={location.party.lat} lng={location.party.lng} text={'Soirée'} />
        <WeddingPlace lat={location.ceremony.lat} lng={location.ceremony.lng} text={'Cérémonies'}  />
        <WeddingPlace lat={location.brunch.lat} lng={location.brunch.lng} text={'Brunch'}  />
      </GoogleMap>
    );
  }
}

export default WeddingMap;
