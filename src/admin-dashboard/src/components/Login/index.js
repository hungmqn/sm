import React, { Component } from 'react';
import './index.scss';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  color: #303030;
`

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input type="text" autoComplete="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" autoComplete="current-password" placeholder="Password" />
          </div>
          <Button>Login</Button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
