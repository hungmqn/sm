import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory()

ReactDOM.render((
  <Router history={history}>
    <Switch>
      <Route exact path="/" name="Home" component={Home} />
      <Route path="/dashboard" name="Dashboard" component={Dashboard} />
    </Switch>
  </Router>
), document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
