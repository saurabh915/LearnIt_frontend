import React from 'react'
import './RectangleBox.css'; // Make sure to use the same CSS file

// Sample student data
const studentData = {
  name: 'John Doe',
  class: '10th Grade',
  rollNo: 'A12345',
};

const contactInfo = {
  fullName: 'Johnatan Smith',
  email: 'example@example.com',
  phone: '(097) 234-5678',
  mobile: '(098) 765-4321',
  address: 'Bay Area, San Francisco, CA',
};


function Blank() {


  
  return (
       <div className="std-container">
        <div className="rectangle-box">
          {/* <div className="image-container">
            <img src="./Profilepicture.jpg" alt="Student" className="round-image" />
          </div> */}
          <div className="image-container">
    <img src="profilepicture.jpg" alt="Student" className="round-image" />
</div>

          <div className="info-container">
            <p>{`Name: ${studentData.name}`}</p>
            <p>{`Class: ${studentData.class}`}</p>
            <p>{`Roll No: ${studentData.rollNo}`}</p>
          </div>
        </div>
        <div className="rectangle-horizontal">
          <div className="info-container">
            <p>{`Full Name: ${contactInfo.fullName}`}</p>
            <p>{`Email: ${contactInfo.email}`}</p>
            <p>{`Phone: ${contactInfo.phone}`}</p>
            <p>{`Mobile: ${contactInfo.mobile}`}</p>
            <p>{`Address: ${contactInfo.address}`}</p>
          </div>
        </div>
        <div>
          <performance/>
        </div>
      </div>
   
  )
}

export default Blank