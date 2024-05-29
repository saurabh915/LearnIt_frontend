import React, { useState } from 'react'
import "./Test.css"
import { useNavigate } from 'react-router-dom';
import Sciencep from './Untaught/Subjects2/Science2/Sciencep';
import Mathp from './Untaught/Subjects2/Math2/Mathp';
import Socialp from './Untaught/Subjects2/Social2/Socialp';
function Test({subject,setDlive,setsubject}) {
  const navigate = useNavigate();
  const [flag, setflag] = useState(true)
  function GiveCurrent(params) {
   setflag(false)
  }
  return (
<>

{flag?
    <div className="test">
    
      <div className='tright'>
        <h2 style={{ position: "absolute", top: "169px", fontSize: '25px', color: 'red', fontWeight: '900' }}>New content test</h2>
        <h3 style={{ color: "green", fontWeight: '650', marginBottom: '20px' }}>Read below instructions carefully</h3>
        <div style={{ justifyContent: 'left', fontWeight: '500' }}>
          <ol className='instructions'>
            <li>Read all given content carefully before answering.</li>
            <li>Select your answers legibly from provided options.</li>
            <li>You can use pencil and paper for rough works</li>
            <li>Manage your time wisely</li>
            <li>Review your answers before submitting the exam</li>
          </ol>
        </div>
        <button onClick={GiveCurrent} className="btn btn-primary">start test</button>
      </div>
    </div>
:
   
     subject === "Science" ? (
       <div>
    <Sciencep key={1} cSubject ={subject}setDlive = {setDlive} setsubject={setsubject} />
  </div>
) : subject === "Maths" ? (
  <div>
    <Mathp key={2} cSubject ={subject} setDlive = {setDlive} setsubject={setsubject} />
  </div>
) : (
  <div>
    <Socialp key={3} cSubject ={subject} setDlive = {setDlive} setsubject={setsubject} />
  </div>
)
}

</>

  )
}

export default Test;
