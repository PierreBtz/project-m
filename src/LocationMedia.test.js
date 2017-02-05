import React from 'react';
import ReactDOM from 'react-dom';
import LocationMedia from './LocationMedia';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { app } from './reducers/reducers';

import { NO_LOCATION } from './actions/actions';

const store = createStore(app);
let onHoverChange;
let locationHovered;

beforeEach(() => {
  onHoverChange = jest.fn();
  locationHovered = NO_LOCATION;
});

it('LocationMedia renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <LocationMedia onHoverChange={onHoverChange} locationHovered={locationHovered} />
    </Provider>, div);
});
