import React from 'react';
import ReactDOM from 'react-dom';
import Rsvp from './Rsvp';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { app } from './reducers/reducers'

const store = createStore(app);

it('Rsvp renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Rsvp />
    </Provider>, div);
});
