import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientSignUp = () => {
    const navigate = useNavigate();
    const [profilePicture, setProfilePicture] = useState(null);
    const [illnessHistory, setIllnessHistory] = useState('');

    const handleFileChange = (event) => {
        setProfilePicture(URL.createObjectURL(event.target.files[0]));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save form data to the server/database here

        // After saving data, navigate to the patient dashboard
        navigate('/dashboard');
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold mb-4">Patient Sign Up</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <label htmlFor="profile-picture" className="block text-sm font-medium text-gray-700">Profile Picture</label>
                    <input
                        type="file"
                        id="profile-picture"
                        name="profile-picture"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-white file:bg-blue-500 hover:file:bg-blue-600 transition-transform transform hover:scale-105"
                    />
                    {profilePicture && (
                        <img
                            src={profilePicture}
                            alt="Profile Preview"
                            className="mt-4 w-32 h-32 rounded-full object-cover"
                        />
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="surgery-history" className="block text-sm font-medium text-gray-700">History of Surgery</label>
                    <textarea
                        id="surgery-history"
                        name="surgery-history"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        rows="3"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="illness-history" className="block text-sm font-medium text-gray-700">History of Illness</label>
                    <textarea
                        id="illness-history"
                        name="illness-history"
                        value={illnessHistory}
                        onChange={(e) => setIllnessHistory(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        rows="3"
                        placeholder="Enter illnesses separated by commas"
                    />
                    {illnessHistory && (
                        <div className="mt-2 p-2 bg-gray-100 border border-gray-300 rounded-md">
                            <strong>Illness History:</strong>
                            <p>{illnessHistory.split(',').map((illness, index) => (
                                <span key={index} className="block text-sm text-gray-700">{illness.trim()}</span>
                            ))}</p>
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default PatientSignUp;
