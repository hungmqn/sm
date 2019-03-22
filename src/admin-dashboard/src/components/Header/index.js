import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: block;
  text-align: center;
`


function Header() {
  return (
    <StyledHeader>
      <h1>Admin Dashboard</h1>
    </StyledHeader>
  );
}


export default Header;