import React, {  useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Subjects1.css';
import CurrentScreen2 from '../Untaught/CurrentScreen2';

import Test from './Test';
function Subjects() {
  const [subjects, setSubjects] = useState(["Science", 'Maths', "Social"]);
  const [Usubjects, setUSubjects] = useState([]);
  const [Fsubjects, setFSubjects] = useState([]);
  const [live, setlive] = useState(false);
  const [Csubject, setCsubject] = useState("");
  const navigate = useNavigate();
  // eslint-disable-next-line
  useLayoutEffect(() => {
    let email = localStorage.getItem("email");
    // Fetch subjects from your server
    const headers = new Headers({
      'Content-Type': 'application/json', // Example header, replace with your headers
      
    });
    setSubjects(prev=>prev)
    
    // Fetch options object with headers
    const requestOptions = {
      method: 'POST', // or 'POST', 'PUT', etc.
      headers: headers,
      body: JSON.stringify({email: email}),
      // Additional options can be added, such as body for POST requests
    };
    

    
    fetch('http://localhost:8000/subjects',requestOptions)
    .then((response) => response.json())
    .then((data) => 
    {
      let arr = [];
      arr =   Object.keys(data.CMarks) 
   
      setUSubjects(arr)
      
       setFSubjects(subjects.filter(element => !Usubjects.includes(element.toLocaleLowerCase())));
    
      }
    )
    .catch((error) => console.error('Error fetching subjects:', error));
    



     
  },);

  const giveTest = (subject) => {
    navigate(`/${subject.replace(/\s/g, "")}1`);
  };





  return (
    <> 
     {Fsubjects.length !== 0 || live ?
     
            <>
            {Csubject === "" ?
            
            <section className="main">
            <div className="main-top">
            
                  <h1>Current Test Subjects</h1>
                  </div>
                  <section className="main-subjects">
                    {subjects.map((subject, index) => (
                      !Usubjects.includes(subject.toLocaleLowerCase()) ?
                        <div className="card" key={index}>
                          <h3>{subject}</h3>
                          <p>{`Strengthening ${subject} skills.`}</p>
                          <button onClick={() => setCsubject(subject)}>Get Started</button>
                        </div>
                        :
                        <div className="card" key={index}>
                          <h3>{subject}</h3>
                          <p>Strengthening {subject} skills.</p>
                          <button className="btn m-2 btn-primary disabled" onClick={() => giveTest("Maths")}>Get Started</button>
                        </div>
                    ))}
                  </section></section>
            
            // :Csubject === "Science"?<Science1 setlive = {setlive} setCsubject={setCsubject} />:Csubject === "Maths"?<Math1  setCsubject={setCsubject} setlive = {setlive}/>:<Social1 setCsubject={setCsubject}  setlive = {setlive}/>}
     :<Test live ={live} Csubject={Csubject} setlive = {setlive} setCsubject={setCsubject}   />}
            </>
            :
            <>
              
               <CurrentScreen2  />
             
            </>
          }
     
    </>
  );
}

export default Subjects;
