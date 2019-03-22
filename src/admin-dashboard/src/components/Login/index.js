import React, { Component } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';

const Button = styled.button`
  border: none;
  ${color}
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
          <Button color='text-primary' bg='primary'>Login</Button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
