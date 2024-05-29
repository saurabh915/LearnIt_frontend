import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Chart from "chart.js/auto";
import "./Performance.css";
import { getStudentTestScores,getstudentdata } from "../../service/quizapi";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Performance = () => {

  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartRef3 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartInstance2 = useRef(null);
  const chartInstance3 = useRef(null);
  const [academicMarks, setAcademicMarks] = useState([]);
  const [fresh, setFresh] = useState(false);
  const [currentMarks, setCurrentMarks] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [dynamicMarks, setDynamicMarks] = useState([]);
  const [academicSubjects, setAcademicSubjects] = useState([]);
  const [currentSubjects, setCurrentSubjects] = useState([]);
  const [result, setResult] = useState();
  const [dynamicSubjects, setDynamicSubjects] = useState([]);
  const [performance, setPerformance] = useState("");
  const [allMarks, setallMarks] = useState(0);
  
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [CMarks, setCMarks] = useState(null);
  const [DMarks, setDMarks] = useState(null);
  const [selectedN, setselectedN] = useState(0);
  const [option, setoption] = useState([0,1])
  const navigateToHome = () => {
    navigate('/welcome');
  };

  const navigateToTest = () => {
    navigate('/CurrentScreen2');
  };



  useEffect(() => {

    const fetchData =async() =>{
      try {
        
        const email = localStorage.getItem("email");
        let data = await getstudentdata(email);
        
        
        
      setData(data);
      if(data[1] && data[1] !== undefined){
        
        var AMarks = Object.values(data[1]);
        var ASubjects = Object.keys(data[1]);
    }
    
    if (data[2] !== undefined) {
      
      var CMarks = Object.values(data[2]);
      var CSubjects = Object.keys(data[2]);
    }
    if(data[3] !== undefined)
      {
      var DMarks = Object.values(data[3]);
      var DSubjects = Object.keys(data[3]);
      
    }
    
    
    
    
    setAcademicMarks(AMarks);
    setCurrentMarks(CMarks);
    setDynamicMarks(DMarks);
    
    setAcademicSubjects(ASubjects);
    setCurrentSubjects(CSubjects);
    setDynamicSubjects(DSubjects);
    
    console.log("All data loaded successfully");
    
    
    
    
    
    
    
    
    
    
    const data2 = await getStudentTestScores(email);
    
    setCMarks(data2["marks"][0]["CMarks"]);
    var Values = [];
    for (let i = 0; i < data2["marks"][0]["CMarks"].length; i++) {
      
      let Csum = data2["marks"][0]["CMarks"][i];
      let Dsum = data2["marks"][0]["DMarks"][i];
      
      delete Csum.id;
      delete Csum._id;
      delete Dsum.id;
      delete Dsum._id;
      Values = [...Values ,...Object.values(Csum)] ;
        Values = [...Values ,...Object.values(Dsum)];
        
      }
      console.log(Values);
      let arrayOfNumbers = Values.map(str => Number(str));
      let TMarks =     arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      console.log("total marks are " + TMarks);
      setallMarks(TMarks);
     let allMarksPercent =  (TMarks /((data2["marks"][0]["CMarks"].length) * 60))*100;
     if ( allMarksPercent >= 0) {
       setallMarks(allMarksPercent)
      }else{
      console.log("it is 0");
       setallMarks(0);
     }
     
      setDMarks(data2["marks"][0]["DMarks"]);
      setoption(data2["marks"][0]["CMarks"].length)
      setoption(Array.from(Array(data2["marks"][0]["CMarks"].length + 1).keys()));
      
    } catch (error) {
      console.log(error);
    }
    }
    try {
      
      fetchData();
    } catch (error) {
   console.log(error);   
    }

  }, [fresh]);
  function NumberSelect({ num }) {
    const options = [];
    for (let i = 0; i < option.length-1; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
  
    return (
      <select  value={selectedN}onChange={handleChange}>
        {options}
      </select>
    );
  }
  useEffect(() => {
    if (chartInstance1.current) {
      chartInstance1.current.destroy();
    }
    if (chartInstance2.current) {
      chartInstance2.current.destroy();
    }
    if (chartInstance3.current) {
      chartInstance3.current.destroy();
    }

    const data1 = {
      labels: currentSubjects,
      datasets: [
        {
          data: currentMarks,
          backgroundColor: ["red", "blue", "green"],
        },
      ],
    };

    const data2 = {
      labels: dynamicSubjects,
      datasets: [
        {
          data: dynamicMarks,
          backgroundColor: ["red", "blue", "green"],
        },
      ],
    };
    const data3 = {
      labels: academicSubjects,
      datasets: [
        {
          data: academicMarks,
          backgroundColor: ["red", "blue", "green"],
        },
      ],
    };

    const ctx1 = chartRef1.current.getContext("2d");
    chartInstance1.current = new Chart(ctx1, {
      type: "pie",
      data: data1,
    });

    const ctx2 = chartRef2.current.getContext("2d");
    chartInstance2.current = new Chart(ctx2, {
      type: "pie",
      data: data2,
    });
    const ctx3 = chartRef3.current.getContext("2d");
    chartInstance3.current = new Chart(ctx3, {
      type: "pie",
      data: data3,
    });
if (academicMarks != undefined) {
  var Asum = academicMarks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log("academic sum is"+ Asum );
  Asum  = Math.abs((Asum  ) /500)*100;
  console.log("percentage of all academic marks:", Asum);
}

if(currentMarks !== undefined)
{
  var Csum = currentMarks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  Csum = Math.abs(Csum /(10* currentMarks.length))*100;
  console.log("Sum of all current marks:", Csum);
  
}
if (dynamicMarks !== undefined) {
  var Dsum = dynamicMarks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  Dsum = Math.abs((Dsum /(10*dynamicMarks.length)))*100;
  console.log("Sum of all dynamic marks:", Dsum);
  
}
if(Asum !== undefined && Csum !== undefined && Dsum !== undefined)
{
  let total = Asum + allMarks;
  total = ((total + allMarks)/200)*100;
  console.log("final total of 3 tests",total);
  total = (total *0.30 ) + (Csum *0.30) + (Dsum*0.40)

  console.log("all marks are ", allMarks);
  setResult(total)
if (total > 70 ) {
      setPerformance("Fast Learner");
    } else {
      if (total > 50) {
        setPerformance("Average Learner");
      } else {
        setPerformance("Slow Learner");
      }
    }
}

    
  }, [fresh, academicMarks, currentMarks, dynamicMarks, academicSubjects, currentSubjects, dynamicSubjects,allMarks]);
  const handleChange = (event) => {
    setselectedN(event.target.value);
  }

useEffect(() => {

}, [selectedOption])


  return (
    <div className="Performance">
      <h1>Test Performance</h1>
  

      <div className="chart-content" style={{display:"flex" ,flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
        <div>
          <h3>Current Test </h3>
     
    
          <div className="chart-container" >
        <canvas style={{ border: "3px solid black", margin: "10px", height: "100px", width: "200px" }} ref={chartRef1}></canvas>
       
      </div>
        </div>
        <div>
          <h3>Dynamic Test </h3>
          <div className="chart-container" >
       
         <canvas style={{ border: "3px solid black", height: "290px", width: "200px" }} ref={chartRef2}></canvas>
       
      </div>
        </div>
        <div>
          <h3>Academic Performance</h3>
          <div className="chart-container" >
      
        <canvas style={{ border: "3px solid black", height: "290px", width: "200px" }} ref={chartRef3}></canvas>
      </div>
        </div>

        <div className="rectangle-horizontal"style={{margin:"0px"}}>
            <h1>Performance Table:</h1>
            <div>
            <div>
<h4>Select Test Number:</h4>
      <NumberSelect num={10} />
    </div>
    </div>
          <div className="info-container">
          <table style={{border:"2px solid black"}}>
      <thead>
        <tr style={{color:"blue",border:"2px solid black"}}>
          <th colSpan="5">Academic Marks</th>
          <th colSpan="3">Current Test Marks</th>
          <th colSpan="3">Untaught Syllabus Test Marks</th>
        </tr>
        <tr style={{color:"black",border:"2px solid black"}}>
          <th>Hindi</th>
          <th>English</th>
          <th>Maths</th>
          <th>Science</th>
          <th>Social</th>
          <th>Science</th>
          <th>Social</th>
          <th>Maths</th>
          <th>Science</th>
          <th>Social</th>
          <th>Maths</th>
        </tr>
      </thead>
      <tbody style={{border:"2px solid black"}}>
        <tr style={{color:"white",border:"2px solid black"}}>
          {/* Academic Marks */}
          <td>{data? data[1]?.hindi:null}</td>
          <td>{data ?data[1]?.english:null}</td>
          <td>{data ?data[1]?.maths:null}</td>
          <td>{data ?data[1]?.science:null}</td>
          <td>{data ?data[1]?.social:null}</td>

          {/* Current Test Marks */}
  
          <td>{CMarks? CMarks[selectedN]?.science:null}</td>
          <td>{CMarks?CMarks[selectedN]?.social:null}</td>
          <td>{CMarks?CMarks[selectedN]?.maths:null}</td>
          {/* Untaught Syllabus Test Marks */}
       
          <td>{DMarks? DMarks[selectedN]?.science:null}</td>
          <td>{DMarks?DMarks[selectedN]?.social:null}</td>
          <td>{DMarks?DMarks[selectedN]?.maths:null}</td>
        </tr>
      </tbody>
    </table>
          </div>
        </div>

   
        </div>
        <div className="linegraphs"> 

        <h3>Current Test History </h3>
   <LineChart width={930} height={350} data={CMarks}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="id" />
<YAxis  domain={[0, 10]}/>
<Tooltip />
<Legend />
<Line type="monotone" dataKey="science" stroke="#8884d8" />
<Line type="monotone" dataKey="maths" stroke="#82ca9d" />
<Line type="monotone" dataKey="social" stroke="#dc3545" />
</LineChart>
   <h3>UnTaught Test History </h3>

   <LineChart width={930} height={350} data={DMarks}
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="id" />
<YAxis  domain={[0, 10]}/>
<Tooltip />
<Legend />
<Line type="monotone" dataKey="science" stroke="#8884d8" />
<Line type="monotone" dataKey="maths" stroke="#82ca9d" />
<Line type="monotone" dataKey="social" stroke="#dc3545" />
</LineChart>
     
</div>
      {/* <div className="chart-container" style>
        <canvas style={{ border: "3px solid black", margin: "10px", height: "100px", width: "200px" }} ref={chartRef1}></canvas>
        <canvas style={{ border: "3px solid black", margin: "5px", height: "290px", width: "200px" }} ref={chartRef2}></canvas>
        <canvas style={{ border: "3px solid black", margin: "5px", height: "290px", width: "200px" }} ref={chartRef3}></canvas>
      </div> */}
      <h1>Student Categorization</h1>
  {dynamicMarks?.length == 3 ?<><div className="category" style={{ justifyContent: "center" }}>
        <div>Your Marks: {parseInt(result)}</div>
        <div>Here is your Category</div>
        <div>{performance}</div>
      </div></>:<><div>Give All Tests to View Your Category</div></>}  
      <br />
      {/* <div className="foot">
        <div onClick={navigateToTest} className="btn btn-primary">Give Your Next Test</div>
        <div onClick={navigateToHome} className="btn btn-primary">Home Page</div>
      </div> */}
    </div>
  );
};

export default Performance;
