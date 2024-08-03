import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const consultations = [
    { id: 1, patientName: 'Alice Smith', illness: 'Flu', date: '2024-08-01' },
    { id: 2, patientName: 'Bob Johnson', illness: 'Headache', date: '2024-08-02' },
    // Add more consultation data as needed
];

const PrescriptionPage = () => {
    const navigate = useNavigate();
    const [prescriptions, setPrescriptions] = useState({});

    const handlePrescriptionChange = (id, field, value) => {
        setPrescriptions(prev => ({
            ...prev,
            [id]: {
                ...prev[id],
                [field]: value,
            }
        }));
    };

    const handleSubmit = (id) => {
        // Save the prescription details to the server/database here
        console.log(`Prescription for consultation ${id}:`, prescriptions[id]);
        // After saving, navigate to the doctor's dashboard
        navigate('/doctor-dashboard');
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Prescription Page</h1>
            <div className="bg-white shadow-lg rounded-lg p-6">
                {consultations.map((consultation) => (
                    <div key={consultation.id} className="mb-4 border p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">Consultation with {consultation.patientName}</h2>
                        <p><strong>Illness:</strong> {consultation.illness}</p>
                        <p><strong>Date:</strong> {consultation.date}</p>
                        <div className="mb-4">
                            <label htmlFor={`care-${consultation.id}`} className="block text-sm font-medium text-gray-700">Care to be Taken</label>
                            <input
                                type="text"
                                id={`care-${consultation.id}`}
                                value={prescriptions[consultation.id]?.careToBeTaken || ''}
                                onChange={(e) => handlePrescriptionChange(consultation.id, 'careToBeTaken', e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor={`medicines-${consultation.id}`} className="block text-sm font-medium text-gray-700">Medicines</label>
                            <textarea
                                id={`medicines-${consultation.id}`}
                                value={prescriptions[consultation.id]?.medicines || ''}
                                onChange={(e) => handlePrescriptionChange(consultation.id, 'medicines', e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                rows="3"
                            />
                        </div>
                        <button
                            onClick={() => handleSubmit(consultation.id)}
                            className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105"
                        >
                            Submit Prescription
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrescriptionPage;
