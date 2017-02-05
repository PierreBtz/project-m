import React from 'react';
import ReactDOM from 'react-dom';
import BigDay from './BigDay';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { app } from './reducers/reducers'

const store = createStore(app);

it('BigDay renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BigDay />
    </Provider>, div);
});
