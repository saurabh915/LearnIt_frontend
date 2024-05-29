
const url = "http://localhost:8000"
// export const getstudentdata = async(credentials)=>{
//     try {
// console.log("trying to make request");
//         const response = await fetch(`http://localhost:8000/studentdata`, {
//             method: 'POST',
//             headers: {
//               "Content-Type": "application/json",
             
//             },
//             body: JSON.stringify(

//               { email: credentials}
      
//               )
//           });
//           const averageMarks = await response.json();
//      let avg =  averageMarks.user[0].AverageMarks;
//      let subject  = averageMarks.user[0].Marks
//      let ans  = [avg, subject]
//           return ans;
       


//     } catch (error) {
//         console.log("error while adduser",error.message);
//     }
// }



export const getstudentdata = async(credentials)=>{
    try {
console.log("trying to make request");
        const response = await fetch(`http://localhost:8000/studentdata`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify(

              { email: credentials}
      
              )
          });
          const averageMarks = await response.json();
          console.log("averageMarks are");
          console.log(averageMarks);
          let name = averageMarks.user[0].name;
          let email =averageMarks.user[0].email;
          let phone =averageMarks.user[0].phone;
          let address =averageMarks.user[0].address;
     let avg =  averageMarks.user[0].AverageMarks;
     let marks  = averageMarks.user[0].Marks
     let cmarks  = averageMarks.user[0].CMarks
     let dmarks  = averageMarks.user[0].DMarks
     console.log(dmarks);
     let ans  = [avg, marks,cmarks,dmarks,name,email,phone,address]
   console.log(ans);
          return ans;
       


    } catch (error) {
        console.log("error while adduser",error.message);
    }
}
export const getStudentTestScores = async(credentials)=>{
    try {
console.log("trying to make request");
        const response = await fetch(`http://localhost:8000/allmarks`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify(

              { email: credentials}
      
              )
          });
          const averageMarks = await response.json();
        
          return averageMarks;
       


    } catch (error) {
        console.log("error while adduser",error.message);
    }
}




export const postcurrentTestR = async(credentials, cResult)=>{
    try {
console.log("trying to make request");
console.log(cResult);
        const response = await fetch(`http://localhost:8000/cResult`, {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify(

              { 
                email: credentials,
                cResult: cResult
           
              },

              )
          });
          const averageMarks = await response.json();
   
          return averageMarks;
       


    } catch (error) {
        console.log("error while addCmarks",error.message);
    }
}

export const postDynamicTestR = async(credentials, dResult)=>{
    try {
console.log("trying to make request");
        const response = await fetch(`http://localhost:8000/dResult`, {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify(

              { 
                email: credentials,
                dResult: dResult
           
              },

              )
          });
          const averageMarks = await response.json();
   console.log("post dresult",averageMarks);
          return averageMarks;
       


    } catch (error) {
        console.log("error while addCmarks",error.message);
    }
}