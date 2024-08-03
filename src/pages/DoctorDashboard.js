import React from 'react';
import { Link } from 'react-router-dom';

const DoctorDashboard = () => {
    const patientInfo = {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        medicalHistory: 'None',
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Doctor's Profile</h1>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold">Patient Information</h2>
                <p><strong>Name:</strong> {patientInfo.name}</p>
                <p><strong>Age:</strong> {patientInfo.age}</p>
                <p><strong>Email:</strong> {patientInfo.email}</p>
                <p><strong>Phone:</strong> {patientInfo.phone}</p>
                <p><strong>Medical History:</strong> {patientInfo.medicalHistory}</p>
                <Link
                    to="/prescription"
                    className="mt-4 block text-center py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105"
                >
                    Go to Prescription Page
                </Link>
            </div>
        </div>
    );
};

export default DoctorDashboard;
