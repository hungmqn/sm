import React from 'react';
import { Link } from 'react-router-dom';
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

// export default function Button(props) {
//   return <StyledButton width='50%' p='0.5rem' fontSize='1rem' color={props.color} bg={props.bg}>{props.children}</StyledButton>
// };

// export default function Button({ width = '50%', p = '0.5rem', fontSize = '1rem', color = 'black', bg = 'pink', children }) {
//   return <StyledButton width={width} p={p} fontSize={fontSize} color={color} bg={bg}>{children}</StyledButton>
// };

export default function Navbar(props) {
  return (<StyledNavbar
            p={props.p || '0.1rem'}
            fontSize={props.fontSize || '1rem'}
            color={props.color || 'black'}
            bg={props.bg || 'pink'}>
      { props.children ||
       <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
       </ul>
      }
    </StyledNavbar>
  )
};