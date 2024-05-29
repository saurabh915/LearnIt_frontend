
import React ,{useState,useLayoutEffect} from 'react';
import { Link } from 'react-router-dom';
import fetchquiz from '../../../fetchquiz';
import Math2 from './Math2';
function Mathp({cSubject,setsubject,setDlive}) {
  const [Content ,setContent] = useState();
  const [maths ,setMaths] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [Mathdata2, setMathdata2] = useState([]);



        useLayoutEffect(() => {
          const fetchingquiz = async () => {
              console.log("fetching quiz");
              let test = await fetchquiz("maths2");
              setContent(test.subjecttest["content"]);
              const mathData = test.subjecttest["questions"];
              setMathdata2(mathData);
              setSelectedOptions(new Array(mathData.length).fill(0));
          }
          fetchingquiz();
      }, []);
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
  return (

    <div style={pageStyle}>
        {maths === ""? 
      <div >
        <h2 style={{ color: "red", marginTop: '50px', width: "500px", marginLeft: "120px" }}>Read below content carefully</h2>
        <div id="paragraph" style={containerStyle}>

          <p style={{ color: "black", fontSize: "20px" }}>
          {Content}
          </p>
        </div>

 
          <button id="startQuizButton" onClick={()=>{setMaths("maths")}} style={buttonStyle}>Start Quiz</button>
   

      </div>
      :<Math2 cSubject={cSubject} setSelectedOptions ={setSelectedOptions} Mathdata2 = {Mathdata2} selectedOptions = {selectedOptions}setsubject={setsubject} setDlive ={setDlive}/>}
    </div>
  );
}

export default Mathp;