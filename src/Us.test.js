import React from 'react';
import ReactDOM from 'react-dom';
import Us from './Us';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { app } from './reducers/reducers'

const store = createStore(app);

it('Us renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Us />
    </Provider>, div);
});
