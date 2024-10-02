import React, { useState } from 'react';

const PersonalProfile = () => {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        experience: '5 years of experience in real estate, specializing in residential properties.',
        propertiesSold: 20,
        reviews: [
            {
                clientName: 'Alice Smith',
                review: 'John was very helpful in finding my dream home. Highly recommended!',
            },
            {
                clientName: 'Bob Johnson',
                review: 'Excellent service! He made the process so easy and stress-free.',
            },
        ],
    });

    const handleUpdateProfile = () => {
        // Logic to update the profile (e.g., open a modal for editing)
        console.log('Profile updated');
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Personal Profile</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Information</h2>
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        value={profile.name}
                        className="input input-bordered w-full"
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Experience</span>
                    </label>
                    <textarea
                        value={profile.experience}
                        className="textarea textarea-bordered w-full"
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Properties Sold</span>
                    </label>
                    <input
                        type="number"
                        value={profile.propertiesSold}
                        className="input input-bordered w-full"
                        readOnly
                    />
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Client Reviews</h2>
                <div className="space-y-4">
                    {profile.reviews.map((review, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-md shadow">
                            <p className="font-semibold">{review.clientName}</p>
                            <p className="text-gray-600">{review.review}</p>
                        </div>
                    ))}
                </div>

                <button
                    className="btn btn-primary mt-6"
                    onClick={handleUpdateProfile}
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default PersonalProfile;
