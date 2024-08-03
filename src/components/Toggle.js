import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PatientSignUp from './PatientSignUp';

const Toggle = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [isPatientSignUp, setIsPatientSignUp] = useState(false);

    const handleToggle = (form) => {
        if (form === 'signUp') {
            setIsSignUp(true);
            setIsPatientSignUp(false);
        } else if (form === 'patientSignUp') {
            setIsSignUp(false);
            setIsPatientSignUp(true);
        } else {
            setIsSignUp(false);
            setIsPatientSignUp(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="mb-4">
                <button
                    onClick={() => handleToggle('signUp')}
                    className={`px-4 py-2 text-sm font-medium rounded-t-lg ${isSignUp && !isPatientSignUp ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                    Sign Up
                </button>
                <button
                    onClick={() => handleToggle('signIn')}
                    className={`px-4 py-2 text-sm font-medium rounded-t-lg ${!isSignUp && !isPatientSignUp ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                    Sign In
                </button>
                <button
                    onClick={() => handleToggle('patientSignUp')}
                    className={`px-4 py-2 text-sm font-medium rounded-t-lg ${isPatientSignUp ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                    Patient Sign Up
                </button>
            </div>
            {isSignUp && !isPatientSignUp && <SignUp />}
            {!isSignUp && !isPatientSignUp && <SignIn />}
            {isPatientSignUp && <PatientSignUp />}
        </div>
    );
};

export default Toggle;
