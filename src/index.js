import React from 'react';
import ReactDOM from 'react-dom';
import Us from './Us';
import BigDay from './BigDay';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './index.css';
import App from './App';
import Rsvp from './Rsvp';
import Accommodation from './Accommodation';
import ContactUs from './ContactUs';
import Admin from './Admin';

import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap-theme.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { app } from './reducers/reducers'

const store = createStore(app, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Us} />
        <Route path="big-day" component={BigDay} />
        <Route path="rsvp" component={Rsvp} />
        <Route path="accommodation" component={Accommodation} />
        <Route path="contactUs" component={ContactUs} />
        <Route path="admin" component={Admin} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
