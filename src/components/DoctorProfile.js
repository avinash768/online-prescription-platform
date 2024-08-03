import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorProfile = () => {
  const navigate = useNavigate();

  const handlePrescription = () => {
    navigate('/prescription-page');
  };

  return (
    <div>
      <h1>Doctor Profile</h1>
      <button onClick={handlePrescription}>Go to Prescription Page</button>
    </div>
  );
};

export default DoctorProfile;
