import React from 'react';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';

const doctors = [
    { id: 1, name: 'Dr. Alice Johnson', specialty: 'Cardiology', profileImage: '/images/doctor1.jpg' },
    { id: 2, name: 'Dr. Bob Smith', specialty: 'Neurology', profileImage: '/images/doctor2.jpg' },
    // Add more doctors as needed
];

const PatientDashboard = () => {
    const downloadPrescription = (doctor) => {
        const doc = new jsPDF();

        // Set the title
        doc.setFontSize(22);
        doc.text('Prescription', 20, 20);

        // Add doctor's details
        doc.setFontSize(16);
        doc.text(`Doctor: ${doctor.name}`, 20, 30);
        doc.text(`Specialty: ${doctor.specialty}`, 20, 40);

        // Add patient's details
        doc.text('Patient Details:', 20, 50);
        doc.text(`Name: John Doe`, 20, 60);
        doc.text(`Age: 30`, 20, 70);
        doc.text(`Email: john.doe@example.com`, 20, 80);
        doc.text(`Phone: 123-456-7890`, 20, 90);

        // Add prescription details
        doc.text('Prescription Details:', 20, 100);
        doc.text('Care to be taken:', 20, 110);
        doc.text('Take rest and stay hydrated', 20, 120); // Example data
        doc.text('Medicines:', 20, 130);
        doc.text('Paracetamol, Ibuprofen', 20, 140); // Example data

        // Save the PDF
        doc.save('prescription.pdf');
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Patient Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                    <div key={doctor.id} className="bg-white shadow-lg rounded-lg p-6">
                        <img src={doctor.profileImage} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-center">{doctor.name}</h2>
                        <p className="text-center text-gray-600">{doctor.specialty}</p>
                        <Link
                            to={`/consult/${doctor.id}`}
                            className="block mt-4 text-center py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105"
                        >
                            Consult
                        </Link>
                        <button
                            onClick={() => downloadPrescription(doctor)}
                            className="block mt-4 text-center py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-transform transform hover:scale-105"
                        >
                            Download Prescription
                        </button>
                        <Link
                            to="/payment"
                            className="block mt-4 text-center py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
                        >
                            Payment Page
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PatientDashboard;
