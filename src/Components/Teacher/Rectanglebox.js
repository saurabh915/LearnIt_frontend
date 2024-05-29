// Import React and CSS
import React, { useEffect, useState } from 'react';
import './RectangleBox.css'; // Make sure to use the same CSS file
import { getStudentTestScores, getstudentdata } from '../../service/quizapi';
// Sample student data





// React component
const Rectanglebox = () => {

  const [data, setData] = useState([]);
  const [CMarks, setCMarks] = useState(null);
  const [DMarks, setDMarks] = useState(null);
  const [selectedN, setselectedN] = useState(0);
  const [option, setoption] = useState([0])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem('email');
        const data = await getstudentdata(email);
        setData(data)
        console.log("data is",data.data[2]); 
        const data2 = await getStudentTestScores(email);

       
        setCMarks(data2["marks"][0]["CMarks"]);
        setDMarks(data2["marks"][0]["DMarks"]);
        setoption(data2["marks"][0]["CMarks"].length)
        setoption(Array.from(Array(data2["marks"][0]["CMarks"].length + 1).keys()));

        // setAmarks(data[0]);
        // // Assuming data[4] is an object with properties maths, science, and social
        // const hasMaths = data[4]?.maths !== null;
        // const hasScience = data[4]?.science !== null;
        // const hasSocial = data[4]?.social !== null;
        // console.log(data[4].maths);
        // console.log(data[4].science);
        // console.log(data[4].social);
        // console.log(hasMaths);
        // console.log(hasScience);
        // console.log(hasSocial);

        // // Check if all three subjects have data
        // const newCtest = hasMaths && hasScience && hasSocial;
        // console.log('newCtest:', newCtest);

        // setctest(newCtest);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
//  >>>>>>>>>>> api   fetch the data of the students  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//   const Student = mongoose.model('Student', studentSchema);

// // API endpoint to get all students
// app.get('/api/students', async (req, res) => {
//   try {
//     const students = await Student.find();
//     res.json(students);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });
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


const handleChange = (event) => {
  setselectedN(event.target.value);
}
  return (
    
      <div className="std-container">
        <div className="rectangle-box">
          <div className="image-container">
            {/* <img src="/Profilepicture.jpg"   /> */}
          </div>
          <div className="info-container">
            <p>{`Name: ${data?data[4]:null}`}</p>
            <p>{`Class: 8th Grade`}</p>
            <p>{`Email: ${data?data[5]:null}`}</p>
            <p>{`Phone: ${data?data[6]:null}`}</p>
           
            <p>{`Address: ${data?data[7]:null}`}</p>
            <p>{`Current Syllabus Test Marks:` }</p>
            <ol style={{color:"blue",fontWeight:"bold"}}>
              <li>Science Marks:  {data?data[2]?.science:null}</li>
              <li>Maths Marks:    {data?data[2]?.maths:null}</li>
              <li>Social Marks:   {data?data[2]?.social:null}</li>
            </ol>
            <p>{`Untaught Syllabus Test Marks:` }</p>
            <ol style={{color:"blue", fontWeight:"bold"}}>
              <li>Science Marks: {data?data[3]?.science:null}</li>
              <li>Maths Marks:{data?data[3]?.maths:null}</li>
              <li>Social Marks:{data?data[3]?.social:null}</li>
            </ol>
          </div>
        </div>
        <div className="rectangle-horizontal">
            <h1>Performance:</h1>
            <div>
            <div>
<h4>Select Test Number:</h4>
      <NumberSelect num={10} />
    </div>
    </div>
          <div className="info-container">
          <table>
      <thead>
        <tr style={{color:"blue"}}>
          <th colSpan="5">Academic Marks</th>
          <th colSpan="3">Current Test Marks</th>
          <th colSpan="3">Untaught Syllabus Test Marks</th>
        </tr>
        <tr style={{color:"black"}}>
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
      <tbody>
        <tr style={{color:"white"}}>
          {/* Academic Marks */}
          <td>{data? data[1]?.hindi:null}</td>
          <td>{data ?data[1]?.english:null}</td>
          <td>{data ?data[1]?.maths:null}</td>
          <td>{data ?data[1]?.science:null}</td>
          <td>{data ?data[1]?.social:null}</td>

          {/* Current Test Marks */}
  
          <td>{CMarks? CMarks[selectedN].science:null}</td>
          <td>{CMarks?CMarks[selectedN].social:null}</td>
          <td>{CMarks?CMarks[selectedN].maths:null}</td>
          {/* Untaught Syllabus Test Marks */}
       
          <td>{DMarks? DMarks[selectedN].science:null}</td>
          <td>{DMarks?DMarks[selectedN].social:null}</td>
          <td>{DMarks?DMarks[selectedN].maths:null}</td>
        </tr>
      </tbody>
    </table>
          </div>
        </div>
        <div>
      
        </div>
      </div>
 





        

    
  );
};

export default Rectanglebox;
