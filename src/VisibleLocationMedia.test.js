import React from 'react';
import ReactDOM from 'react-dom';
import VisibleLocationMedia from './VisibleLocationMedia';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { app } from './reducers/reducers'

const store = createStore(app);

it('VisibleLocationMedia renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <VisibleLocationMedia />
    </Provider>, div);
});
