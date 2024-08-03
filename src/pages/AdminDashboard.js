// src/pages/AdminDashboard.js
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';

const DashboardContainer = styled(animated.div)`
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AdminDashboard = () => {
  const dashboardAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <DashboardContainer style={dashboardAnimation}>
      <h2>Admin Dashboard</h2>
      {/* Add your admin dashboard content here */}
    </DashboardContainer>
  );
};

export default AdminDashboard;
