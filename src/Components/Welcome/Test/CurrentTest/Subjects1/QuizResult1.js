import React, { useEffect, useRef, useState } from "react";
import { useParams } from 'react-router-dom';
import Performance from "../../../../Performance/Performance";
import { postcurrentTestR } from '../../../../../service/quizapi'
import { useNavigate } from 'react-router-dom';
import TestReview from "../../TestReview/TestReview.jsx"
function QuizResult1(props) {
const {Csubject , setCsubject,setlive,score} = props;





  const [Cmarks, setCmarks] = useState({ "Science": 0 });
  const [performance, setPerformance] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    console.log("selected options in quiz result are");
    console.log(props.Options);
    let email = localStorage.getItem("email")
    const currentPath = window.location.pathname;
    console.log("post result");
    console.log(currentPath);
    if (Csubject == "Science") {
      console.log("posting science result ",score);
      postcurrentTestR(email, { science:score });
      
    } else if (Csubject == "Maths") {
      console.log("posting maths result ",score);
      console.log("performing maths");
      postcurrentTestR(email, { maths: score });
    } else if (Csubject == "Social") {
      console.log("posting social result ",score);
      postcurrentTestR(email, { social: score });
    }
  },[])

  const showPerformance = () => {

    navigate("/subjects")
  }




  return (
  <>
  <div >

  <div  >
    <div style={{ marginBottom: "10px" }}>Result</div>
    <div> {props.message}</div>
    <div> Your Score: {score}</div>
    <div style={{ marginBottom: "30px" }}>     Total Score: {props.totalScore}</div>
    <button onClick={()=>{setCsubject("");setlive(false)}} style={{ width: "250px" }}>Give Remaining Tests</button>
  
  </div>
  </div>
    <TestReview data= {props.data} options={props.Options}/>
  

    </>
    );
   


}

export default QuizResult1;

