import React, {Component, PropTypes} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import WeddingPlace from './WeddingLocator.js';
import weddingMapStyle from './WeddingMapStyle.json';

import secret from './private/secret-config.json';
import location from './private/location.json';

class WeddingMap extends Component {

  constructor(props) {
    super(props);
  }

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


  _onChildMouseEnter(key) {
    if(this.props.onMarkerHoverChange) {
      this.props.onMarkerHoverChange(key);
    }
  }

  _onChildMouseLeave() {
    if (this.props.onMarkerHoverChange) {
      this.props.onMarkerHoverChange(-1);         
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
      .map(loc => <WeddingPlace 
                    lat={loc.map.location.lat} 
                    lng={loc.map.location.lng} 
                    text={loc.map.displayName} />

      );
    return (
       <GoogleMap
        bootstrapURLKeys={secret}
        defaultCenter={this.props.center}
        defaultZoom={12}
        options={this.mapOptions}
        onChildMouseEnter={this._onChildMouseEnter.bind(this)}
        onChildMouseLeave={this._onChildMouseLeave.bind(this)}>
        {weddingPlaces}
      </GoogleMap>
    );
  }
}

WeddingMap.propTypes = {
  onMarkerHoverChange: PropTypes.func
}

export default WeddingMap;
