import React, { useState } from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';
import { color } from 'styled-system';

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

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <StyledDashboard bg='accent'>
      <Content color='text-primary'>
        <Header></Header>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Increasemento
        </button>
      </Content>
    </StyledDashboard>
  );
}


export default Dashboard;