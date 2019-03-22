import React, { Component } from 'react';
import './index.scss';

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
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
