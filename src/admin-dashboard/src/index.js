import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import ErrorPage from './containers/ErrorPage';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import globalStyles from './styles/global';

const GlobalStyle = createGlobalStyle`${globalStyles}`;


ReactDOM.render((
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/dashboard" name="Dashboard" component={Dashboard} />
        <Route path="/" name="Home" component={Home} />
        <Route component={ErrorPage} />
      </Switch>
      {/* <Route path="/dashboard" name="Dashboard" component={Dashboard} />
      <Route path="/" name="Home" component={Home} />
      <Route component={ErrorPage} /> */}
    </Router>
  </ThemeProvider>
), document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
