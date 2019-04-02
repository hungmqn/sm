import React, {lazy, Suspense }  from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import store from './store';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import globalStyles from './styles/global';

const GlobalStyle = createGlobalStyle`${globalStyles}`;

const Home = lazy(() => import('./containers/Home'))
const Dashboard = lazy(() => import('./containers/Dashboard'))
const LoginForm = lazy(() => import('./containers/Login'))
const RegisterForm = lazy(() => import('./containers/Register'))
const ErrorPage = lazy(() => import('./containers/ErrorPage'))

ReactDOM.render((
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div>
        <Suspense maxDuration={1500} fallback={<h1>Loading...</h1>}>
          <Router>
            <Dashboard path='dashboard'/>
            <Home path='/'>
              <LoginForm path="/login"/>
              <RegisterForm path="/register"/>
            </Home>
            <ErrorPage default/>
          </Router>
        </Suspense>
        <GlobalStyle/>
      </div>
    </ThemeProvider>
  </Provider>
    // <Suspense maxDuration={1500} fallback={<h1>Loading...</h1>}>
    //   <Provider store={store}>
    //   <Home path='/'>
    //     <LoginForm path="/login"/>
    //     <RegisterForm path="/register"/>
    //   </Home>
    //   </Provider>
    // </Suspense>
), document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
