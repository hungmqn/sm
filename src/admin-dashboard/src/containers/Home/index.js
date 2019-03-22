import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginForm from '../../components/Login';
import RegisterForm from '../../components/Register';
import './index.scss';

class Home extends Component {

  // componentDidMount() {
  //   if (!isLogin()) {
  //     TO DO
  //   }
  // }

  render() {
    return (
      <div className="text-center">
        <header className="content">
          <h1>
            Welcome to SM
          </h1>
          <Router>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Route path="/" exact component={LoginForm} />
            <Route path="/login" name="LoginForm" component={LoginForm} />
            <Route path="/register" name="Review" component={RegisterForm} />
          </Router>
        </header>
      </div>
    );
  }
}

export default Home;
