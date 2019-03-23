import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
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
      <StyledHome bg='green' >
        <Navbar>
        </Navbar>
        <Content color='black'>
          <h1>SM</h1>
          <Route exact path="/" component={LoginForm} />
          <Route path="/login" name="LoginForm" component={LoginForm} />
          <Route path="/register" name="Review" component={RegisterForm} />
        </Content>
      </StyledHome>
    );
  }
}

export default Home;
