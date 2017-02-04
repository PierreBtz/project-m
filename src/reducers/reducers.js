import { HOVER } from '../actions/actions';

export const NO_LOCATION = 'NO_LOCATION';

const initialState = {
  locationHovered: NO_LOCATION
}

export function app(state = initialState, action) {
  switch (action.type) {
    case HOVER:
      return Object.assign({}, state, {
        locationHovered: action.location
      })
    default:
      return state
  }
}