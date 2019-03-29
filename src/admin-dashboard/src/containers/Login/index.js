import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreator } from '../../store/user/user.action';

import styled from 'styled-components';
import { space } from 'styled-system';

import Button from '../../components/Button';
import Input from '../../components/Input';

const StyledFormGroup = styled.div`
  ${space}
`

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    login: event => dispatch(actionCreator.login({ username: 'username', password: 'password' }))
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangPassword = this.onChangPassword.bind(this);
  }

  state = {
    username: '',
    password: ''
  }

  onChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  onChangPassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const { login } = this.props;
    return (
      <div>
        <form>
          <StyledFormGroup mb='0.5rem'>
            <Input type="text" autoComplete="username" value={this.state.username} onChange={this.onChangeUsername} placeholder="Username" />
          </StyledFormGroup>
          <StyledFormGroup mb='0.5rem'>
            <Input type="password" autoComplete="current-password" value={this.state.password} onChange={this.onChangPassword} placeholder="Password" />
          </StyledFormGroup>
          <Button type='button' onClick={login} bg='yellow'>Login</Button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
