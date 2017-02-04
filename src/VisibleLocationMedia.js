import { connect } from 'react-redux';
import { hover } from './actions/actions';
import LocationMedia from './LocationMedia';

const mapStateToProps = (state) => {
  return {
    locationHovered: state.locationHovered
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHoverChange: (location) => {
      dispatch(hover(location));
    }
  }
}

const VisibleLocationMedia = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationMedia)

export default VisibleLocationMedia;