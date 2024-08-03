import React, { useState } from 'react';

const SignUp = () => {
    const [profilePicture, setProfilePicture] = useState(null);

    const handleFileChange = (event) => {
        setProfilePicture(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form className="w-full max-w-md">
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
                    <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">Specialty</label>
                    <input
                        type="text"
                        id="specialty"
                        name="specialty"
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
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Years of Experience</label>
                    <input
                        type="number"
                        id="experience"
                        name="experience"
                        step="0.1"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
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

export default SignUp;
