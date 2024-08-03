import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fadeIn} className="dashboard">
      <h1>Online Prescription Platform</h1>
      <div className="buttons">
        <button className="animated-button" onClick={() => navigate('/doctor')}>Doctor</button>
        <button className="animated-button" onClick={() => navigate('/Patient')}>Patient</button>
        <button className="animated-button" onClick={() => navigate('/Admin')}>Admin</button>
      </div>
    </animated.div>
  );
};

export default Dashboard;
