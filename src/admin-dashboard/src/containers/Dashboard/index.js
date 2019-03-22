import React, { useState } from 'react';
import Header from '../../components/Header';
import './index.scss';

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <Header></Header>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Increasemento
        </button>
      </div>
    </div>
  );
}


export default Dashboard;