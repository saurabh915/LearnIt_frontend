import './App.css';


import Form from './Components/Login/Form';
import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import Main from './Components/Teacher/Main';
import MainScreen from './Components/Parent/MainScreen';

import Welcome from './Components/Welcome/Welcome';

import Profile from './Components/Teacher/profile.js';

// import Subjects from './Components/Welcome/Test/Untaught/';1
import Subjects from './Components/Welcome/Test/CurrentTest/Subjects1.jsx'

import { useEffect, useState } from 'react';

import Makequiz from './Components/Teacher/Quiz/Makequiz.jsx';
import Takequiz from './Components/Teacher/Takequiz.jsx';
import MakeDynamic from './Components/Teacher/Quiz/MakeDynamic.jsx';
import GoogleForm from './Components/Teacher/Quiz/GoogleForm.jsx';


import Home1 from './Components/Home1.jsx';
import AccessDeniedPage from './Components/AccessDenied/AccessDeniedPage.jsx';




function App() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  useEffect(() => {
    setCredentials({ ...credentials, "email": localStorage.getItem("email") });
    
    // eslint-disable-next-line
  }, [])

  return (

    <div className="App">


      <Router>






        {/* <----------------- Student Section ------------> */}

        <Routes>

          {/* <------------------------- Home Page ---------------------> */}
          <Route exact path="/" element={<Home1 />} />


        
          <Route exact path="/StudentLogin" element={<Form credentials={credentials} setCredentials={setCredentials}  />} />
          <Route exact path="/ParentLogin" element={<Form credentials={credentials} setCredentials={setCredentials}  />} />
          <Route exact path="/TeacherLogin" element={<Form credentials={credentials} setCredentials={setCredentials} />} />

          {credentials.email ? (

            <>
          
        
            <Route exact path="/Welcome" element={<Welcome  />} />
            {/* <Route exact path="/instructions" element={<Instruction />} />

            <Route exact path="/Subjects_Content" element={<Subjects_Content />} />
            <Route exact path="/MathsVideo" element={<MathsVideo />} />
            <Route exact path="/ScienceVideo" element={< ScienceVideo />} />
            <Route exact path="/SocialVideo" element={<SocialVideo />} />
            <Route exact path="/inbox" element={<Inbox />} />
            <Route exact path="/TestScreen" element={<TestScreen />} />
              <Route exact path="/DyTestScreen" element={<DyTest />} />
              <Route exact path="/CurrentScreen1" element={<CurrentScreen1 />} />
              <Route exact path="/Social1" element={<Social1 />} />
              <Route exact path="/Maths1" element={<Math1 />} />
              <Route exact path="/Science1" element={<Science1 />} />
              <Route exact path="/CurrentScreen2" element={<CurrentScreen2 />} />
              <Route exact path="/Social2" element={<Social2 />} />
              <Route exact path="/Math2" element={<Math2 />} />
              <Route exact path="/Science2" element={<Science2 />} />
              <Route exact path="/Socialp" element={<Socialp />} />
              <Route exact path="/Mathsp" element={<Mathp />} />
              <Route exact path="/Sciencep" element={<Sciencep />} />
              <Route exact path="/test" element={<Test />} /> */}
              <Route exact path="/subjects" element={<Subjects />} />
              {/* <Route exact path="/chatbot1" element={<Chatbot1 />} /> */}
     
            

              









             






      
              <Route exact path="/main" element={<Main />} />
              <Route exact path="/makedynamic" element={<MakeDynamic />} />
              <Route exact path="/takequiz" element={<Takequiz />} />
              <Route exact path="/googleform" element={<GoogleForm />} />
              <Route exact path="/makequiz" element={<Makequiz />} />
              {/* <Route exact path="/classes" element={<Classes />} />
              <Route exact path="/class_alloted" element={<Class_alloted />} />
              <Route exact path="/Student_List" element={<Student_List />} />
              <Route exact path="/Subject_Selection" element={<Subject_Selection />} />
              <Route exact path="/category" element={<Category />} />
              <Route exact path="/blank" element={<Blank />} />
              <Route exact path="/options" element={<Options />} />
              <Route exact path="/calenderForStudent" element={<CalendarForStudent/>} /> */}
              




              {/* <---------------Parent Section --------------> */}
              <Route exact path="/mainscreen" element={<MainScreen />} />
              {/* <Route exact path="/performance" element={<Performance />} />
              <Route exact path="/attendence" element={<Attendence />} />
              <Route exact path="/feedback" element={<Feedback />} />
              <Route exact path="/chatbot" element={<Chatbot />} />
            <Route exact path="/calenderForParent" element={<CalendarForParent/>} /> */}
            <Route exact path="/studentprofile" element={<Profile />} />
              </>
       

          ) : (<Route exact path="*" element={<AccessDeniedPage />} />)

          }
        </Routes >
      </Router >


    </div >
  );
}

export default App;
