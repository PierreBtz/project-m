import { app, NO_LOCATION } from './reducers';
import { HOVER } from '../actions/actions';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(
      app(undefined, {})
    ).toEqual(
      {
        locationHovered: NO_LOCATION
      }
      )
  });

  it('should handle HOVER action', () => {
    expect(
      app(undefined, {})
    ).toEqual(
      {
        locationHovered: NO_LOCATION
      }
      )
  });
});
