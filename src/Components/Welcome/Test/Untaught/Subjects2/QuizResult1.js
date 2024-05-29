import React, { useEffect, useRef, useState } from "react";
import { useParams } from 'react-router-dom';
import Performance from "../../../../Performance/Performance";
import { postDynamicTestR, postcurrentTestR } from '../../../../../service/quizapi'
import { useNavigate } from 'react-router-dom';
import TestReview from "../../TestReview/TestReview";
function QuizResult1(props) {


const {setCsubject,setDlive,cSubject} =props;



  const [Cmarks, setCmarks] = useState({ "science": 0 });
  const [performance, setPerformance] = useState(true);

  useEffect(() => {
    let email = localStorage.getItem("email")
    const currentPath = window.location.pathname;
    console.log(currentPath);
    if (cSubject == "Science") {
      console.log("posting science result ",props.score);
      postDynamicTestR(email, { science: props.score });

    } else if (cSubject == "Maths") {
      console.log("posting maths result ",props.score);
      postDynamicTestR(email, { maths: props.score });
    } else if (cSubject == "Social") {
      console.log("posting social result ",props.score);
      postDynamicTestR(email, { social: props.score });
    }
   
  }, [])
  
  const showPerformance = () => {
  
  }

  // return (
  // <>
  //   {performance ? (
  //     <>
  //     <div className='show-score'>
  //       Your Score: {props.score}<br />
  //       Total Score: {props.totalScore}
  //     </div>
  //   <button id="next-button" onClick={showPerformance}>Show Performance</button></>
  //       ) : (<Performance cMarks = {Cmarks}/>
  //   )}
  // </>


  // performance ?(<> <div className='show-score'>
  //       Your Score: {props.score}<br />
  //         Total Score: {props.totalScore}
  //      </div>
  //      <button id="next-button" onClick={showPerformance}>Show Performance</button></>):(<div  className="pfc"><Performance cMarks = {Cmarks}/></div>)

  // );


  return (


    <>
    <div >
  
    <div  >
      <div style={{ marginBottom: "10px" }}>Result</div>
      <div> {props.message}</div>
      <div> Your Score: {props.score}</div>
      <div style={{ marginBottom: "30px" }}>     Total Score: {props.totalScore}</div>
      <button onClick={()=>{setCsubject("");setDlive(false)}} style={{ width: "250px" }}>Give Remaining Test</button>
      <TestReview data= {props.data} options={props.Options}/>
    
    </div>
    </div>
    
  
      </>
  );



}

export default QuizResult1;
