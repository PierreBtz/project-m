import React from 'react';
import ReactDOM from 'react-dom';
import WeddingLocator from './WeddingLocator';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { app } from './reducers/reducers'

const store = createStore(app);

it('WeddingLocator renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <WeddingLocator />
    </Provider>, div);
});
