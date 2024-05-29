import React, { useState } from 'react'
import "./Test.css"
import { useNavigate } from 'react-router-dom';
import Science1 from './Subjects1/Science1/Science1';
import Math1 from './Subjects1/Math1/Math1';
import Social1 from './Subjects1/Social1/Social1';
function Test({live,setCsubject,Csubject,setlive}) {
  const navigate = useNavigate();
  const [flag, setflag] = useState(true)
  function GiveCurrent(params) {
    console.log("setting flag false");

setflag(false)
  }
  return (
    <>
{flag ?
  <div className="test">
  <div className='tleft'>
  <h2 style={{ position: "absolute", top: "113px", fontSize: '25px', color: 'red', fontWeight: '900' }}>Current syllabus Test</h2>
  <h3 style={{ color: "green", fontWeight: '650', marginBottom: '20px' }}>Read below instructions carefully</h3>
  <div style={{ justifyContent: 'left', fontWeight: '500' }}>
  <ol className='instructions'>
  <li>Read all questions carefully before answering.</li>
  <li>Select your answers legibly from provided options.</li>
  <li>You can use pencil and paper for rough works</li>
  <li>Manage your time wisely</li>
  <li>Review your answers before submitting the exam</li>
  </ol>
  </div>
  <button onClick={()=>{GiveCurrent(Csubject);}} className="btn btn-primary">start test </button>
  </div>
  
  </div>
:Csubject === "Science"?<Science1  Csubject={Csubject} setlive = {setlive} setCsubject={setCsubject} />:Csubject === "Maths"?<Math1   Csubject={Csubject} setCsubject={setCsubject} setlive = {setlive}/>:<Social1  Csubject={Csubject}  setCsubject={setCsubject}  setlive = {setlive}/>
}
</>  
  
  )
}

export default Test
