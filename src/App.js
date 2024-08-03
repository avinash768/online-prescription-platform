import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DoctorSignUp from './components/DoctorSignUp';
import PatientSignUp from './components/PatientSignUp';
import AdminSignIn from './components/AdminSignIn';
import PatientDashboard from './pages/PatientDashboard';
import DoctorConsultation from './components/DoctorConsultation';
import PrescriptionPage from './components/PrescriptionPage';
import DoctorDashboard from './pages/DoctorDashboard';
import PaymentPage from './components/PaymentPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/doctor" element={<DoctorSignUp />} />
        <Route path="/patient" element={<PatientSignUp />} />
        <Route path="/admin" element={<AdminSignIn />} />
        <Route path="/dashboard" element={<PatientDashboard />} />
        <Route path="/consult/:doctorId" element={<DoctorConsultation />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/prescription" element={<PrescriptionPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
