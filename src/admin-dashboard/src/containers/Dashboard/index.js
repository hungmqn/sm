import React, { useState } from 'react';
import { connect } from 'react-redux';
import { navigate } from '@reach/router';

import Header from '../../components/Header';
import styled from 'styled-components';
import { color } from 'styled-system';

import Navbar from '../../components/Navbar';

const StyledDashboard = styled.div`
  ${color}
  text-align: center;
`
const Content = styled.div`
  ${color}
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function Dashboard(props) {
  const [count, setCount] = useState(0);
  const { user } = props;
  if (!user.id && !user.token) {
    navigate('/login')
  }
  return (
    <StyledDashboard bg='pink'>
      <Navbar>
      </Navbar>
      <Content color='black'>
        <Header></Header>
        <p>You clicked {count} times</p>
        <button id='counter' bg='green' onClick={() => setCount(count + 1)}>
          Increasemento
        </button>
      </Content>
    </StyledDashboard>
  );
}

Dashboard.defaultProps = {
  ok: 'testDefaultProps'
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);