import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, width, fontSize, color,  } from 'styled-system';

const StyledButton = styled.button`
  border: none;
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

Button.defaultProps = {
  width: '50%',
  p: '0.5rem',
  fontSize: '1rem',
  color: 'black',
  bg: 'pink'
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['green', 'pink', 'black']),
}

export default Button;
