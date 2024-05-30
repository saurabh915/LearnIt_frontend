import React, { useEffect, useState } from "react";
import './Feedback.css';
import axios from 'axios';

const Feedback = () => {
  const [showNotification, setShowNotification] = useState(false);

  const [parentData, setParentData] = useState('');
  const [teacherData, setTeacherData] = useState('');
  const [studentData, setStudentData] = useState('');
  const [feel, setFeel] = useState('0');
  const [satisfy, setSatisfy] = useState('0');
  const [additionalFeedback, setAdditionalFeedback] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault();


    // console.log(teacherData,studentData,parentData);

    // setTeacherData(teacherData);
    // setParentData(parentData);
    // setStudentData(studentData);


    const forms = {
      teacherData: teacherData,
      parentData: parentData,
      studentData: studentData,
      feel: feel,
      satisfy: satisfy,
      additional_feedback: additionalFeedback
    };

    console.log(forms);

    console.log(JSON.stringify(forms));


    try {
      const response = await axios.post('https://learnit-backend-5t1o.onrender.com/addFeedback', JSON.stringify(forms), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("....");

      console.log(response.data);
      notifierMessage();

    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'feel':
        setFeel(value);
        break;
      case 'satisfy':
        setSatisfy(value);
        break;
      case 'additional_feedback':
        setAdditionalFeedback(value);
        break;
      case 'teacher':
        setTeacherData(value);
        break;
      default:
        break;
    }
  };



  const fetchEvents = async () => {
    try {
      const loggedParent = localStorage.getItem('email');
      const response = await axios.post('https://learnit-backend-5t1o.onrender.com/getChildByParentData', {
        email: loggedParent
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log(response.data);
      setParentData(response.data.name);
      setStudentData(response.data.childname);

 

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [teacherData]);

  const notifierMessage = () => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <div className="feedback">
      <h1>Parent Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        {/* ... (other form fields are unchanged and intact) */}
        <div className="field">
          <label htmlFor="securitySatisfaction">How do you feel about your child's progress?</label>
          <select
            id="securitySatisfaction"
            name="feel"
            value={feel}
            onChange={handleChange}
          >
            <option value="0">Very Unsatisfied</option>
            <option value="1">Unsatisfied</option>
            <option value="2">Neutral</option>
            <option value="3">Satisfied</option>
            <option value="4">Very Satisfied</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="pricingSatisfaction">How satisfied are you with our teachers and the online learning platform?</label>
          <select
            id="pricingSatisfaction"
            name="satisfy"
            value={satisfy}
            onChange={handleChange}
          >
            <option value="0">Very Unsatisfied</option>
            <option value="1">Unsatisfied</option>
            <option value="2">Neutral</option>
            <option value="3">Satisfied</option>
            <option value="4">Very Satisfied</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="review">Any additional feedback or review:</label>
          <textarea
            id="review"
            name="additional_feedback"
            value={additionalFeedback}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* <div className="field">
          <label htmlFor="review">Child Name</label>
          <input className="formdata w-100" value={studentData} name="student" onChange={handleChange} disabled></input>
        </div>

        <label htmlFor="review">Teacher</label>
        <select name="teacher" className="text-dark" value={teacherData} onChange={handleChange}>
          <option>{teacherData !== '' ? teacherData : 'Select the faculty'}</option>
          {dropdownData && dropdownData.map((options, index) => (
            <option key={index}>{options}</option>
          ))}
        </select> */}

        {/* {data && (
          <div className="data-container">
            <h2>Faculty : {teacherData}:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )} */}

        <div className="feedbackbtn"><button type="submit">Submit Feedback</button> </div>
      </form>

      <div className="noti mt-5 bg-info">
        {showNotification && (
          <div className="notification">
            <h1>Feedback has been sent successfully !</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
