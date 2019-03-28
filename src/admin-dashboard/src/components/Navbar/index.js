import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import { space, fontSize, color,  } from 'styled-system';

const StyledNavbar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  ul {
    margin-right: 1em;
    li {
      display: inline;
    }
    li::after {
      content: '|';
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
    li:last-child:after
    {
      content: '';
    }
  }
  ${space}
  ${fontSize}
  ${color}
`
const Navbar = props => {
  return (<StyledNavbar {...props}>
    { props.children ||
    <ul>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
    </ul>
    }
    </StyledNavbar>
  )
}
Navbar.defaultProps = {
  p: '0.1rem',
  fontSize: '1rem',
  color: 'black',
  bg: 'pink'
}

export default Navbar;
