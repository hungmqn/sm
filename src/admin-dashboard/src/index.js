import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';

import Home from './containers/Home';
import Dashboard from './containers/Dashboard';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import globalStyles from './styles/global';

const GlobalStyle = createGlobalStyle`${globalStyles}`;


const history = createBrowserHistory()

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" name="Home" component={Home} />
        <Route path="/dashboard" name="Dashboard" component={Dashboard} />
      </Switch>
    </Router>
  </ThemeProvider>
), document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
