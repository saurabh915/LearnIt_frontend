import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./mainScreen.css";
import CalendarForParent from "./CalenderForParent.jsx";
import "./Chatbot";
import "./Feedback";
import "./Attendence";
import "../Performance/Performance";
import "../Teacher/profile";
import Profile from "../Teacher/profile";
import Inbox from "../Welcome/Inbox.jsx";
import Chatbot from "./Chatbot";
import Feedback from "./Feedback";
import CalendarForStudent from "../Welcome/CalenderForStudent.jsx";


function Main() {
  const navigate = useNavigate();



  const [students, setStudents] = useState([]);
  const [selectedValue, setSelectedValue] = useState({ class_: "8th" });
  const [isLoading, setIsLoading] = useState(true);
  const [childprofile, setchildprofile] = useState(true);
  const [calender, setcalender] = useState(false);
  const [inbox, setinbox] = useState(false);
  const [inbox2, setinbox2] = useState(false);
  const [chat, setchat] = useState(false);
  const [currentQuiz, setcurrentQuiz] = useState(false);
  const [dynamic, setdynamic] = useState(false);
  const [feedback, setfeedback] = useState(false); // Changed variable name to avoid conflict
  const [blank, setblank] = useState(false);
  const [logout, setlogout] = useState(false);

  const [value, setvalue] = useState("")
  const [status, setStatus] = useState([]);
  const [showMenu, setShowMenu] = useState(false);


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


  const setsome = (value) => {
    switch (value) {
      case "childprofile":
        setchildprofile(true);
        setchat(false);
        setinbox(false);
    
        setfeedback(false);
   
        setcalender(false)
        break;
      case "inbox":
        setchildprofile(false);
        setchat(false);
        setinbox(true);
    
        setfeedback(false);
   
        setcalender(false)
        break;

      case "chat":
        setchildprofile(false);
        setchat(true);
        setinbox(false);
  
        setfeedback(false);
    
        setcalender(false)
        break;
      case "feedback":
        setchildprofile(false);
        setchat(false);
        setinbox(false);
 
        setfeedback(true);
    
        setcalender(false);
        break;
        case "calender":
          setchildprofile(false);
          setchat(false);
          setinbox(false);
         
          setfeedback(false);
        
          setcalender(true);
          break;


    }
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
            <button onClick={() => { setsome("childprofile") }}>
            Child Profile
            </button>
          </li>
        
          <li>
            <i className="fas fa-inbox"></i>
            <button onClick={() => { setsome("inbox") }}>Notice</button>
          </li>
          <li>
            <i className="fas fa-book"></i>
            <button onClick={() => { setsome("chat") }}>Chat</button>
          </li>
          <li>
            <i className="fas fa-book"></i>
            <button onClick={() => { setsome("feedback") }}>Feedback</button>
          </li>
          <li>
          <button onClick={() => { setsome("calender") }}>Calender</button>
        
          </li>
        
          <li>
            <i className="fas fa-book"></i>
            <button onClick={()=>{localStorage.removeItem("email"); navigate('/') }}>Logout</button>
          </li>
        </ul>
      </div>
      {/* <div class="group flex flex-col p-6 border dark:border-0 mx-auto bg-[#F97316] bg-opacity-30 dark:bg-dark2 mt-3 rounded-3xl items-start"><div class="flex flex-row gap-2 items-center"><h1 class="text-[40px] font-bold text-primary dark:text-white">0</h1><svg width="50" height="50" viewBox="-2.5 -2.5 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><g class="group-hover:animate-flameMain"><path d="M3.17621 14.6309C3.17621 14.6309 4.36145 16.3721 6.84559 17.846C6.84559 17.846 5.04646 2.64076 16.7689 0C13.7656 11.0227 20.5892 14.1313 23.0766 8.30777C27.2305 13.8537 24.0765 18.6923 24.0765 18.6923C25.7798 18.9377 27.2105 17.0769 27.2105 17.0769C27.2233 17.3061 27.2305 17.5369 27.2305 17.7693C27.2305 24.5241 21.7547 30 14.9998 30C8.24492 30 2.76904 24.5241 2.76904 17.7693C2.76904 16.6842 2.91107 15.6325 3.17621 14.6309Z" fill="#FF6536"></path><path d="M27.2108 17.0769C27.2108 17.0769 25.7801 18.9377 24.0768 18.6923C24.0768 18.6923 27.2307 13.8537 23.0769 8.30777C20.5895 14.1313 13.7658 11.0227 16.7692 0C16.1413 0.141445 15.5526 0.31916 15 0.528398V30C21.7549 30 27.2307 24.5241 27.2307 17.7693C27.2307 17.5368 27.2236 17.3061 27.2108 17.0769Z" fill="#FF421D"></path></g><g class="group-hover:animate-flameInner"><path d="M9.63623 24.6363C9.63623 27.5987 12.0378 30.0002 15.0001 30.0002C17.9625 30.0002 20.364 27.5987 20.364 24.6363C20.364 23.0507 19.6761 21.6258 18.5823 20.6439C16.5085 23.4613 13.5531 19.1875 15.8563 16.0664C15.8563 16.0664 9.63623 16.8459 9.63623 24.6363Z" fill="#FBBF00"></path><path d="M20.3639 24.6363C20.3639 23.0507 19.676 21.6258 18.5822 20.6439C16.5083 23.4613 13.553 19.1875 15.8562 16.0664C15.8562 16.0664 15.5182 16.1089 15 16.2724V30.0002C17.9624 30.0002 20.3639 27.5987 20.3639 24.6363Z" fill="#FFA900"></path></g></svg></div><h3 class="text-lg font-semibold text-orange-500 dark:text-[#FEAF00]">Your Streak</h3><p class="text-sm text-gray-500 dark:text-white">Keep your streak going by studying every day!</p><a class="text-primary border-2 border-[#E7A574] dark:border-[#FEAF00] hover:bg-[#F97316] hover:bg-opacity-50 hover:border-opacity-0 py-1 px-4 rounded-md mt-2" href="/platform/streakLeaderboard"><h2 class="text-sm font-regular dark:text-white">View Leaderboard</h2></a></div> */}
    
      <div style={{ position: "relative", top: "-20px", height: "100vh", overflow: "auto", width: "100%" }}>
      
      
        {childprofile && <Profile />}
        {inbox && <Inbox />}
        {chat && <Chatbot />}
        {feedback && <Feedback />}
        {calender && <CalendarForParent />}
       


       

      </div>
    
    </div>
  );
}

export default Main;


{/* <div className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
<div className="bar"></div>
<div className="bar"></div>
<div className="bar"></div>
</div>
{/* Navigation */}
{/* <div className={`left-nav ${showMenu ? 'show' : ''}`}>
<h1>
Learnit
</h1>
<ul>
  <li>
    <button>
      <Link to="/Studentprofile" className="box1">Child Profile</Link>
    </button>
  </li>

  <li>
    <button> Notice
    </button>
  </li>
  <li>
    <button> <Link to="/Chatbot" className="box1">Chat</Link>
    </button>
  </li>

  <li>
    <button> <Link to="/Attendence" className="box1">Attendance</Link>
    </button>
  </li>
  <li>
    <button> <Link to="/Feedback" className="box1">Feedback</Link>
    </button>
  </li>
  
  <li>
    <button> <Link to="/Calender" className="box1">Calender</Link>
    </button>
  </li>
  <li>
    <button onClick={()=>{localStorage.removeItem("email"); navigate('/') }}style={{color:"black", fontSize:"21px",fontWeight:"900"}} className="box1" > Logout
    </button>
  </li>
</ul>
</div>  */}