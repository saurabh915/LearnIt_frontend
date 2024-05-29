import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./alkesh.css";
import { type } from "@testing-library/user-event/dist/type";
import Category from './Category'
import OptionsComponent from "./Options.jsx"; // Renamed to avoid conflict with state name
import Makequiz from "./Quiz/Makequiz";
import MakeDynamic from './Quiz/MakeDynamic'
import GoogleForm from './Quiz/GoogleForm'
import Inbox from './notice'
import Blank from './Blank.jsx'
import Feedback from "./Feedback.jsx";

import Inbox2 from "./Inbox2.js";
import CalendarForTeacher from "./CalenderForTeacher.jsx";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function Main() {
  const [students, setStudents] = useState([]);
  const [selectedValue, setSelectedValue] = useState({ class_: "8th" });
  const [isLoading, setIsLoading] = useState(true);
  const [home, sethome] = useState(true);
  const [calender, setcalender] = useState(false);
  const [inbox, setinbox] = useState(false);
  const [inbox2, setinbox2] = useState(false);
  const [category, setcategory] = useState(false);
  const [currentQuiz, setcurrentQuiz] = useState(false);
  const [dynamic, setdynamic] = useState(false);
  const [options, setOptions] = useState(false); // Changed variable name to avoid conflict
  const [blank, setblank] = useState(false);
  const [logout, setlogout] = useState(false);

  const [value, setvalue] = useState("")
  const [status, setStatus] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
const [Feedbacks,setFeedback]=useState(false);
const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch('http://localhost:8000/slist', {
          method: "POST", headers: {
            "Content-Type": "application/json",
          }, body: JSON.stringify({ class_: selectedValue.class_ })
        });
        const data = await response.json();
        setStudents(data.students);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching student data:", error);
        setStudents([]);
        setIsLoading(false);
      }
    };

    fetchStudentData();
  }, [selectedValue]);

  const optionsList = [
    { value: "8th", label: "8th" },
    { value: "9th", label: "9th" },
    { value: "10th", label: "10th" },
  ];

  const handleSelectChange = (e) => {
    setSelectedValue({ class_: e.target.value });
  };

  const setsome = (value) => {
    switch (value) {
      case "home":
        sethome(true);
        setcategory(false);
        setinbox(false);
        setcurrentQuiz(false);
        setdynamic(false);
        setOptions(false);
        setblank(false);
        setinbox2(false)
        setcalender(false)
        setFeedback(false);
        break;
      case "inbox":
        sethome(false);
        setcategory(false);
        setinbox(true);
        setcurrentQuiz(false);
        setdynamic(false);
        setinbox2(false)
        setOptions(false);
        setblank(false);
        setcalender(false);
        setFeedback(false);
        break;

      case "category":
        sethome(false);
        setcategory(true);
        setinbox(false);
        setcurrentQuiz(false);
        setdynamic(false);
        setinbox2(false)
        setOptions(false);
        setblank(false);
        setcalender(false);
        setFeedback(false);
        break;
      case "options":
        sethome(false);
        setcategory(false);
        setinbox(false);
        setcurrentQuiz(false);
        setdynamic(false);
        setOptions(true);
        setinbox2(false)
        setblank(false);
        setcalender(false);
        setFeedback(false);
        break;
        case "calender":
          sethome(false);
          setcategory(false);
          setinbox(false);
          setcurrentQuiz(false);
          setdynamic(false);
          setOptions(false);
          setinbox2(false)
          setblank(false);
          setcalender(true);
          setFeedback(false)
          break;
          case "inbox2":
            sethome(false);
            setcategory(false);
            setinbox(false);
            setcurrentQuiz(false);
            setdynamic(false);
            setOptions(false);
            setblank(false);
            setinbox2(true);
            setcalender(false);
            setFeedback(false);
            
            
            break;
            case "feedback":
              sethome(false);
              setcategory(false);
              setinbox(false);
              setcurrentQuiz(false);
              setdynamic(false);
              setOptions(false);
              setblank(false);
              setinbox2(false);
              setcalender(false);
              setFeedback(true);
              
              
              break;

    }
  }
const handlelogout = () => {
    localStorage.removeItem('email')


  }
  return (
    <div className="App2">
      {/* Hamburger menu */}
      <div className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
 <div className="navbarnew">
  
 </div>
      {/* Navigation */}
      <div className={`left-navM ${showMenu ? 'show' : ''}`}>
      <h1>
        Learnit
        </h1>
          
        <ul>
          <li>
            <i className="fas fa-home"></i>
            <button onClick={() => { setsome("home") }}>
              Home
            </button>
          </li>
          {/* <li>
            <i className="fas fa-inbox"></i>
            <button onClick={() => { setsome("inbox2") }}>Inbox</button>
          </li> */}
          <li>
            <i className="fas fa-inbox"></i>
            <button onClick={() => { setsome("inbox") }}>Notice</button>
          </li>
          <li>
            <i className="fas fa-book"></i>
            <button onClick={() => { setsome("category") }}>Category</button>
          </li>
          <li>
            <i className="fas fa-book"></i>
            <button onClick={() => { setsome("options") }}>Make a Quiz</button>
          </li>
          <li>
            <i className="fas fa-book"></i>
            <button onClick={() => { setsome("calender") }}>Calender</button>
          </li>
          <li>
            <i className="fas fa-book"></i>
            <button onClick={() => { setsome("feedback") }}>Feedback</button>
          </li>
          <li>
            <i className="fas fa-book"></i>
            <Link to="/" className="nav-link  " role='button' style={{ color: "black", fontSize:"25px",fontWeight:'600',marginLeft:"30px"}} onClick={handlelogout}>Logout</Link>

          </li>
        </ul>
      </div>
      {/* Main content */}
      <div style={{ position: "relative", top: "10px", overflow: "auto", width: "100%" ,height: "100vh"}}>
        {home && (
          <div className="main-contentteacherM">
            <div className="welcome-msg">
              <h1>Welcome,Teacher </h1>
              {/* <div className="Welcomebox">
                <p>Your students are doing great! 60% students have completed the test.</p>
              </div> */}
            </div>
            <div className="submitted-tests">
              <h2>Submitted Tests</h2>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Select your class:</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  value={selectedValue.class_}
                  onChange={handleSelectChange}
                >
                  <option value="" disabled>Choose...</option>
                  {optionsList.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {isLoading ? (
                <p>Loading students...</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                    
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.name}>
                        <td><div onClick={()=>{localStorage.setItem("email",student.email);navigate("/studentprofile")}}>{student.name}</div></td>
                      
                        {typeof student.CMarks === 'object' && typeof student.DMarks === 'object' && Object.keys(student?.CMarks)?.length === 3 && Object.keys(student?.DMarks)?.length === 3 ? (
                          <td>Completed</td>
                        ) : (
                          <td>Pending</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}
        {category && <Category />}
        {inbox && <Inbox />}
        {/* {inbox2 && <Inbox2 />} */}

        {currentQuiz && <Makequiz />}
        {dynamic && <MakeDynamic />}
        {options && <OptionsComponent />} {/* Render OptionsComponent */}
        {blank && <Blank />}
        {calender && <CalendarForTeacher/>}
        {Feedbacks && <Feedback/>}

      </div>
    </div>
  );
}

export default Main;
