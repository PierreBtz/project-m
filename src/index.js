import React from 'react';
import ReactDOM from 'react-dom';
import Us from './Us';
import BigDay from './BigDay';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './index.css';
import SiteBar from './SiteBar';
import Rsvp from './Rsvp';

import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap-theme.css';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={SiteBar}>
      <IndexRoute component={Us}/>
      <Route path="big-day" component={BigDay}/>
      <Route path="rsvp" component={Rsvp}/>
    </Route>
  </Router>
), document.getElementById('root'));
