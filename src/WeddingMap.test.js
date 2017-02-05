import React from 'react';
import ReactDOM from 'react-dom';
import WeddingMap from './WeddingMap';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { app } from './reducers/reducers'

const store = createStore(app);

it('WeddingMap renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <WeddingMap />
    </Provider>, div);
});
