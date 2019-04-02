import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';

import { user } from '../../store/actions';

import styled from 'styled-components';
import { space } from 'styled-system';

import Button from '../../components/Button';
import Input from '../../components/Input';

const StyledFormGroup = styled.div`
  ${space}
`



class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  state = {
    username: '',
    password: ''
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submitForm(event) {
    const { register } = this.props;
    const { username, password } = this.state;
    register(username, password);
  }

  render() {
    const { user } = this.props;
    if (user.id && user.token) {
      navigate('/dashboard')
    }
    return (
      <div>
        <form>
          <StyledFormGroup mb='0.5rem'>
            <Input type="text" autoComplete="username" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Username" />
          </StyledFormGroup>
          <StyledFormGroup mb='0.5rem'>
            <Input type="password" autoComplete="current-password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
          </StyledFormGroup>
          <Button type='button' onClick={this.submitForm} bg='yellow'>Register</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  register: (username, password) => dispatch(user.actions.register({ username: username, password: password }))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
