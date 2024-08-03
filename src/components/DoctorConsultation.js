import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const DoctorConsultation = () => {
    const { doctorId } = useParams();
    const [illnessHistory, setIllnessHistory] = useState('');
    const [recentSurgery, setRecentSurgery] = useState('');
    const [familyHistory, setFamilyHistory] = useState({ diabetics: '', allergies: '', others: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the form data to the server or database
        console.log({
            doctorId,
            illnessHistory,
            recentSurgery,
            familyHistory,
        });
        // Here you should handle the form submission, e.g., POST request to your server
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Consultation Form</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
                <div className="mb-4">
                    <label htmlFor="illness-history" className="block text-sm font-medium text-gray-700">Current Illness History</label>
                    <textarea
                        id="illness-history"
                        name="illness-history"
                        value={illnessHistory}
                        onChange={(e) => setIllnessHistory(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        rows="3"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="recent-surgery" className="block text-sm font-medium text-gray-700">Recent Surgery (Time Span)</label>
                    <input
                        type="text"
                        id="recent-surgery"
                        name="recent-surgery"
                        value={recentSurgery}
                        onChange={(e) => setRecentSurgery(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Family Medical History</label>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="diabetics"
                            name="family-history"
                            value="Diabetics"
                            onChange={(e) => setFamilyHistory({ ...familyHistory, diabetics: e.target.value })}
                            className="mr-2"
                        />
                        <label htmlFor="diabetics" className="text-sm">Diabetics</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="non-diabetics"
                            name="family-history"
                            value="Non-Diabetics"
                            onChange={(e) => setFamilyHistory({ ...familyHistory, diabetics: e.target.value })}
                            className="mr-2"
                        />
                        <label htmlFor="non-diabetics" className="text-sm">Non-Diabetics</label>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">Any Allergies</label>
                    <input
                        type="text"
                        id="allergies"
                        name="allergies"
                        value={familyHistory.allergies}
                        onChange={(e) => setFamilyHistory({ ...familyHistory, allergies: e.target.value })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="others" className="block text-sm font-medium text-gray-700">Others</label>
                    <input
                        type="text"
                        id="others"
                        name="others"
                        value={familyHistory.others}
                        onChange={(e) => setFamilyHistory({ ...familyHistory, others: e.target.value })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DoctorConsultation;
