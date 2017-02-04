import { connect } from 'react-redux';
import { hover } from './actions/actions';
import WeddingLocator from './WeddingLocator';

const mapStateToProps = (state) => {
  return {
    locationHovered: state.locationHovered
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMarkerHoverChange: (location) => {
      dispatch(hover(location));
    }
  }
}

const VisibleWeddingLocator = connect(
  mapStateToProps,
  mapDispatchToProps
)(WeddingLocator)

export default VisibleWeddingLocator;