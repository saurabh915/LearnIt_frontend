

import React ,{useState,useLayoutEffect, useEffect} from 'react';
import { Link } from 'react-router-dom';
import fetchquiz from '../../../fetchquiz';
import Science2 from './Science2';
import { postDynamicTestR } from '../../../../../../service/quizapi';
function Sciencep({cSubject,setsubject,setDlive}) {
  const [Content ,setContent] = useState();
  const [science, setscience] = useState("")
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [Sciencedata2, setSciencedata2] = useState([]);


  const containerStyle = {
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px',
    display: 'inline-block',  // Set display to inline-block
    width: '700px',
    marginTop: "10px",
    backgroundColor: 'white',

  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '200px',
    marginLeft: "250px"

  };


  const pageStyle = {
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGsoYPMLs9wCwwRcPiFpYev3M1_8JFEGMeiY7EzwtSA&s')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure the background covers the entire viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  useLayoutEffect(() => {
    
    const fetchingquiz = async ()=>{
        console.log("fetching quiz");
        let test = await fetchquiz("science2");
    setContent(test.subjecttest["content"]);
    const scienceData = test.subjecttest["questions"];
    setSciencedata2(scienceData);
    setSelectedOptions(new Array(scienceData.length).fill(0));
    
    }
    fetchingquiz();
    
    
        },[])
  return (

    <div style={pageStyle}>
      {science === ""? 
        <div >
        <h2 style={{ color: "red", marginTop: '50px', width: "500px", marginLeft: "120px" }}>Read below content carefully</h2>
        <div id="paragraph" style={containerStyle}>

          <p style={{ color: "black", fontSize: "20px" }}>
          {Content}
          </p>
        </div>

  
          <button id="startQuizButton" onClick={()=>{setscience("science")}} style={buttonStyle}>Start Quiz</button>
 

      </div>
      
      :<Science2 cSubject={cSubject} setSelectedOptions ={setSelectedOptions} Sciencedata2 = {Sciencedata2} selectedOptions = {selectedOptions} setDlive = {setDlive} setsubject={setsubject}/>}
    
    </div>
  );
}

export default Sciencep;