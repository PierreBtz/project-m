import React, { Component } from 'react';

import GoogleMap from 'google-map-react';
import VisibleWeddingLocator from './VisibleWeddingLocator.js';
import weddingMapStyle from './WeddingMapStyle.json';

import secret from './private/secret-config.json';
import location from './private/location.json';

// google-map-react needs an es6 Promise polyfill to work on IE11.
// eslint-disable-next-line
import { Promise } from 'es6-shim';

class WeddingMap extends Component {

  static defaultProps = {
    center: { lat: location.center.lat, lng: location.center.lng }
  };

  mapOptions(maps) {

    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      // http://www.mapstylr.com/style/light-monochrome/
      styles: weddingMapStyle
    }
  }

  filterByDisplayName(location) {
    const seen = new Set();
    return location.filter(loc => {
      const current = loc.map.displayName;
      return seen.has(current) ? false : seen.add(current);
    });
  }

  render() {
    const weddingPlaces = this.filterByDisplayName(location.locations)
      .map((loc, index) => <VisibleWeddingLocator
        key={index}
        lat={loc.map.location.lat}
        lng={loc.map.location.lng}
        text={loc.map.displayName} />

      );
    return (
      <GoogleMap
        bootstrapURLKeys={secret}
        defaultCenter={this.props.center}
        defaultZoom={12}
        options={this.mapOptions}>
        {weddingPlaces}
      </GoogleMap>
    );
  }
}

export default WeddingMap;
