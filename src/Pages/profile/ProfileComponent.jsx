import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileComponent = () => {
  const [profile, setProfile] = useState({
    name: 'Default Name',
    phoneNumber: 'Default Phone Number',
    email: 'default@example.com',
    noOfQuizzes: 'Default Number',
    lastQuiz: 'Default Date',
    noOfConsultations: 'Default Number',
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const name = localStorage.getItem('userName');
        if (name) {
          const userResponse = await axios.get(`http://localhost:5000/api/users?name=${name}`);
          const userId = userResponse.data.userId;
          const profileResponse = await axios.get(`http://localhost:5000/api/users/${userId}`);
          const userData = profileResponse.data;

          setProfile({
            name: userData.user.name,
            phoneNumber: userData.user.phoneNumber,
            email: userData.user.email,
            noOfQuizzes: userData.noOfQuizzes,
            lastQuiz: userData.lastQuiz,
            noOfConsultations: userData.user.noOfConsultations,
          });
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="container mx-auto mt-10 bg-white rounded-lg shadow-md p-5">
      <h1 className="text-3xl font-bold mb-5">User Profile</h1>
      <div className="grid grid-cols-2 gap-4 text-left">
        <p className="text-xl"><span className="font-bold">Name:</span> {profile.name}</p>
        <p className="text-xl"><span className="font-bold">Phone Number:</span> {profile.phoneNumber}</p>
        <p className="text-xl"><span className="font-bold">Email-ID:</span> {profile.email}</p>
        <p className="text-xl"><span className="font-bold">No of Quiz till date:</span> {profile.noOfQuizzes}</p>
        <p className="text-xl"><span className="font-bold">Last Quiz:</span> {profile.lastQuiz}</p>
        <p className="text-xl"><span className="font-bold">No of Consultations:</span> {profile.noOfConsultations}</p>
      </div>
    </div>
  );
};

export default ProfileComponent;
