import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';

import { user } from '../../store/actions';

import styled from 'styled-components';
import { space, fontSize, color,  } from 'styled-system';

import Button from '../Button';

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
  const { logout } = props;

  const handleLogout = () => {
    logout();
  }

  return (<StyledNavbar {...props}>
    { props.children ||
    (<ul>
      {props.user.id && props.user.token ? (
        <li><Button onClick={handleLogout}>Logout</Button></li>
      ) : (
        <React.Fragment>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </React.Fragment>
      )}
    </ul>)
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


const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  logout: (username, password) => dispatch(user.actions.logout({ username: username, password: password }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
