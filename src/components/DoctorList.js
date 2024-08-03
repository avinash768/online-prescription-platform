// src/components/DoctorList.js
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';

const DoctorListContainer = styled(animated.div)`
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DoctorItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }

  img {
    border-radius: 50%;
    margin-right: 1rem;
  }

  h3 {
    margin: 0;
    color: #007bff;
  }

  p {
    margin: 0.5rem 0 0;
  }
`;

const doctors = [
  { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', profileImg: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Dr. Jane Smith', specialty: 'Dermatologist', profileImg: 'https://via.placeholder.com/100' },
  // Add more doctor objects as needed
];

const DoctorList = () => {
  const listAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <DoctorListContainer style={listAnimation}>
      <h2>Doctors List</h2>
      {doctors.map(doctor => (
        <DoctorItem key={doctor.id}>
          <img src={doctor.profileImg} alt={doctor.name} width="100" height="100" />
          <div>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
          </div>
        </DoctorItem>
      ))}
    </DoctorListContainer>
  );
};

export default DoctorList;
