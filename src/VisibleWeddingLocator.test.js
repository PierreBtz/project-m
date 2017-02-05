import React from 'react';
import ReactDOM from 'react-dom';
import VisibleWeddingLocator from './VisibleWeddingLocator';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { app } from './reducers/reducers'

const store = createStore(app);

it('VisibleWeddingLocator renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <VisibleWeddingLocator />
    </Provider>, div);
});
