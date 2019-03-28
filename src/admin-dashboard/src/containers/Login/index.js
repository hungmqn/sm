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
    login: event => dispatch(actionCreator.login({ username: 'someone', password: 'something'}))
  }
}

class LoginForm extends Component {
  render() {
    const { user, login } = this.props;
    console.log(user)
    return (
      <div>
        <form>
          <StyledFormGroup mb='0.5rem'>
            <Input type="text" autoComplete="username" placeholder="Username" />
          </StyledFormGroup>
          <StyledFormGroup mb='0.5rem'>
            <Input type="password" autoComplete="current-password" placeholder="Password" />
          </StyledFormGroup>
          <Button type='button' onClick={login} bg='yellow'>Login</Button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
