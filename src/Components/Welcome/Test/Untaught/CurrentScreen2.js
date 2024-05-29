//All subjects

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Performance from "../../../Performance/Performance";
import Science2 from "./Subjects2/Science2/Science2";
import Math2 from "./Subjects2/Math2/Math2";
import Social2 from "./Subjects2/Social2/Social2";
import Sciencep from "./Subjects2/Science2/Sciencep";
import Mathp from "./Subjects2/Math2/Mathp";
import Socialp from "./Subjects2/Social2/Socialp";
import Test from "../Test";
function CurrentScreen2({ live }) {
  const [subjects, setSubjects] = useState(["Science", "Maths", "Social"]);
  const [Usubjects, setUSubjects] = useState([]);
  const [Fsubjects, setFSubjects] = useState([]);
  const [subject, setsubject] = useState("");
  const [Dlive, setDlive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch subjects from your server
    let email = localStorage.getItem("email");
    // Fetch subjects from your server
    const headers = new Headers({
      "Content-Type": "application/json", // Example header, replace with your headers
    });

    // Fetch options object with headers
    const requestOptions = {
      method: "POST", // or 'POST', 'PUT', etc.
      headers: headers,
      body: JSON.stringify({ email: email }),
      // Additional options can be added, such as body for POST requests
    };

    fetch("http://localhost:8000/dsubjects", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("and data is");
        console.log(data);

        let arr = [];
        arr = Object.keys(data.DMarks);
        setUSubjects(arr);
        console.log(Usubjects);
        const newArray = subjects.filter(
          (element) => !Usubjects.includes(element.toLocaleLowerCase())
        );
        console.log("new array is" + newArray.length);
        setFSubjects(newArray);
      })
      .catch((error) => console.error("Error fetching subjects:", error));
  },);

  const navigatePerformance = () => {
    navigate("/performance");
  };
  const navigateProfile = () => {
    navigate("/welcome");
  };
  const giveTest = (subject) => {
    navigate(`/${subject}p`);
  };

  return (
    <>
      {Fsubjects.length !== 0 || Dlive ?(
        <div>
          {subject === "" ?  (
            <>
              <section className="main">
                <div className="main-top">
                  <h2> Dynamic Test Subjects</h2>
                </div>
                <section className="main-subjects">
                  {subjects.map((subject, index) =>
                    !Usubjects.includes(subject.toLocaleLowerCase()) ? (
                      <div className="card" key={index}>
                        <h3>{subject}</h3>
                        <p>Join Over 1 million Students.</p>
                        <button onClick={() => setsubject(subject)}>
                          Get Started
                        </button>
                      </div>
                    ) : (
                      <div className="card">
                        <h3>{subject}</h3>
                        <p>Join Over 1 million Students.</p>
                        <button
                          className="btn m-2 btn-primary disabled"
                          onClick={() => giveTest(subject)}
                        >
                          Get Started
                        </button>
                      </div>
                    )
                  )}
                </section>
              </section>{" "}
            </>
          ) : (
          <>
       <Test subject ={subject}setDlive = {setDlive} setsubject={setsubject}/>
          </>
          )}
        </div>
      ) : 
      <>
                <div className="display-4">
                    Congraulations You have given Your All Tests
                  </div>
    
                  <button
                    className=" btn m-2 btn-primary"
                    onClick={navigateProfile}
                  >
                    GO TO PROFILE{" "}
                  </button>                </>}
    </>
  );
}

export default CurrentScreen2;
