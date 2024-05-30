const url = "http://localhost:8000"
export const postNotice = async(notice)=>{
    try {

        const response = await fetch(`https://learnit-backend-5t1o.onrender.com/addnotice`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify(

              { user: notice.user, notice: notice.notice}
      
              )
          });

          return response;
       


    } catch (error) {
        console.log("error while add notice",error.message);
    }
}


export const fetchnotices = async()=>{
    try {

        const response = await fetch(`https://learnit-backend-5t1o.onrender.com/getnotices`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
             
            }
           
          });
         let data = await response.json();
         console.log(data);
         let notices=[];
         data.map((notice)=>{
            notices.push(notice.notice);
         })
         console.log(notices);
          return notices;
       


    } catch (error) {
        console.log("error while add notice",error.message);
    }
}