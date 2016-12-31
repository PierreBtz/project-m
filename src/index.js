import React from 'react';
import ReactDOM from 'react-dom';
import Us from './Us';
import BigDay from './BigDay';
import { Router, Route, browserHistory } from 'react-router'
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Us}/>
    <Route path="us" component={Us}/>
    <Route path="big-day" component={BigDay}/>
  </Router>
), document.getElementById('root'));
