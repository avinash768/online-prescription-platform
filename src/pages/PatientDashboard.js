import React from 'react';
import { Link } from 'react-router-dom';

const doctors = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Neurology', image: 'https://via.placeholder.com/150' },
    // Add more doctor data as needed
];

const PatientDashboard = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Doctors List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {doctors.map((doctor) => (
                    <div key={doctor.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{doctor.name}</h2>
                            <p className="text-gray-500">{doctor.specialty}</p>
                            <Link
                                to={`/consult/${doctor.id}`}
                                className="mt-4 block text-center py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105"
                            >
                                Consult
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PatientDashboard;
