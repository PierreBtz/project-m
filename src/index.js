import React from 'react';
import ReactDOM from 'react-dom';
import Us from './Us';
import BigDay from './BigDay';
import { Router, Route, browserHistory } from 'react-router'
import './index.css';
import SiteBar from './SiteBar';

import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap-theme.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={SiteBar}>
    <Route path="us" component={Us}/>
    <Route path="big-day" component={BigDay}/>
    </Route>
  </Router>
), document.getElementById('root'));
