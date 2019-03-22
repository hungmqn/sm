import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginForm from '../../components/Login';
import RegisterForm from '../../components/Register';
import styled from 'styled-components';
import { color } from 'styled-system';

const StyledHome = styled.div`
  ${color}
  text-align: center;
`
const Content = styled.div`
  ${color}
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class Home extends Component {

  // componentDidMount() {
  //   if (!isLogin()) {
  //     TO DO
  //   }
  // }

  render() {
    return (
      <StyledHome bg='primary' >
        <Content color='text-primary' bg='primary'>
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
        </Content>
      </StyledHome>
    );
  }
}

export default Home;
