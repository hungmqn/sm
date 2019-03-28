import React, { Component } from 'react';

import styled from 'styled-components';
import { space } from 'styled-system';

import Button from '../../components/Button';
import Input from '../../components/Input';

const StyledFormGroup = styled.div`
  ${space}
`



class RegisterForm extends Component {
  render() {
    return (
      <div>
        <form>
          <StyledFormGroup mb='0.5rem'>
            <Input type="text" autoComplete="username" placeholder="Username" />
          </StyledFormGroup>
          <StyledFormGroup mb='0.5rem'>
            <Input type="password" autoComplete="current-password" placeholder="Password" />
          </StyledFormGroup>
          <Button type='button' bg='yellow'>Register</Button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
