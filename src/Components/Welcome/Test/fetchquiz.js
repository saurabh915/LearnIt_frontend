const fetchquiz = async(subject)=>{
    try {

        const response = await fetch(`http://localhost:8000/getquiz/${subject}`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
             
            }
           
          });
         let data = await response.json();
   
   
     return data;
       


    } catch (error) {
        console.log("error while add notice",error.message);
    }
}

export default  fetchquiz;