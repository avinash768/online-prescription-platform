import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorSignUp = () => {
    const navigate = useNavigate();
    const [profilePicture, setProfilePicture] = useState(null);

    const handleFileChange = (event) => {
        setProfilePicture(URL.createObjectURL(event.target.files[0]));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save form data to the server/database here

        // After saving data, navigate to the doctor's dashboard
        navigate('/doctor-dashboard');
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold mb-4">Doctor Sign Up</h2>
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
                {/* Add other fields as needed */}
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

export default DoctorSignUp;
