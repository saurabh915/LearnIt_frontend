// Profile.jsx

import React from 'react';
import Rectanglebox from './Rectanglebox.js';

const Profile = ({ student }) => {
  // if (!student) {
  //   return <div>No student data available</div>;
  // }

  return (
    <div className="profile-container" style={{overflow:"auto",height:"100vh"}}>
    <Rectanglebox/>
    {/* <performance/> */}
    </div>
  );
};

export default Profile;
