//this is my Subjects.jsx
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Subjects2'
function Subjects() {
  const [subjects, setSubjects] = useState(["Science", "Maths", "Social Science", "Hindi", "Engish"]);

  const navigate = useNavigate();
  useEffect(() => {
    // Fetch subjects from your server
    fetch('https://your-server-api.com/subjects')
      .then((response) => response.json())
      .then((data) => setSubjects(data))
      .catch((error) => console.error('Error fetching subjects:', error));
  }, []);
  const giveTest = (subject) => {
    navigate(`/${subject}quiz`)
  }
  return (
    <>
      <section className="main">
      <div className="main-top">
        <h2> Dynamic Test Subjects</h2>
        </div>
        <section className="main-subjects">
          {subjects.map((subject, index) => (
           <div className="card">
           <h3>{subject}</h3>
           <p>Join Over 1 million Students.</p>
           <button onClick={() => giveTest(subject)}>Get Started</button>
         </div>
          ))}
        </section>
      </section>

    </>
  )
}

export default Subjects