// Subjects_Content.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Subjects_Content.css';
import ScienceVideo from './ScienceVideo';
import MathsVideo from './MathsVideo';
import SocialVideo from './SocialVideo';


const Subjects_Content = ({Content,setContent}) => {

  const buttonStyle = {



display: 'inline-block',
    margin:'5px',
    justifyContent:'center',
    alignItems:'center',
    //place-items:'center',
    height:'200px',
    width: '200px',
    marginTop: '10px',
    padding: '15px', // Increased padding for better touch interaction
    fontSize: '18px', // Slightly larger font size
    cursor: 'pointer',
    backgroundColor: '#00afff',
    color: 'white',
    border: 'none',
    borderRadius: '8px', // Increased border radius for a softer look
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
    transition: 'background-color 0.3s ease', // Smooth transition for background color change
  };




  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',

    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a box shadow to the container
    borderRadius: '10px', // Rounded corners for the container
    border: "solid 2px black"

  };
  return (
    <>
    {Content == ""?
    
    <div className='allC'>
      <div className='all-screen' style={{ marginTop: '150px' }}>
        <div style={containerStyle}>
          <h2 style={{ marginBottom: '20px' }}>Subjects</h2>
          <p style={{ fontSize: '16px', color: '#555' }}>Choose a Subject Below:</p>

          {/* Buttons with redirect links */}
        
            <button style={buttonStyle} onClick={()=>{setContent("maths")}}>Maths</button>
         

            <button style={buttonStyle} onClick={()=>{setContent("science")}}>Science</button>
       

            <button style={buttonStyle}onClick={()=>{setContent("social")}}>Social Science</button>
         
        </div>
      </div>
    </div>
    :null
}

{Content == "science"?<ScienceVideo/>:null}
{Content == "maths"?<MathsVideo/>:null}
{Content == "social"?<SocialVideo/>:null}
    </>
  );
};

export default Subjects_Content;














// // Subjects_Content.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// // import './Subject_cont.css'; // Create a separate CSS file

// const Subjects_Content = () => {
//   const buttonStyle = {
//     display: 'block',
//     marginTop: '10px',
//     padding: '15px', // Increased padding for better touch interaction
//     fontSize: '18px', // Slightly larger font size
//     cursor: 'pointer',
//     backgroundColor: 'blue',
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px', // Increased border radius for a softer look
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
//     transition: 'background-color 0.3s ease', // Smooth transition for background color change
//   };

//   return (
//     <div className='all-screen'>
//       <div className="background-container">
//         <h2 style={{ marginBottom: '20px', color: 'white' }}>Subjects</h2>
//         <p style={{ fontSize: '16px', color: '#555' }}>Choose a Subject Below:</p>

//         {/* Buttons with redirect links */}
//         <Link to="/MathsVideo">
//           <button style={buttonStyle}>Maths</button>
//         </Link>

//         <Link to="/ScienceVideo">
//           <button style={buttonStyle}>Science</button>
//         </Link>

//         <Link to="/SocialVideo">
//           <button style={buttonStyle}>Social Science</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Subjects_Content;
