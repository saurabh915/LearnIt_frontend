
const url = "http://localhost:8000"
export const plogin = async(credentials)=>{
    try {

        const response = await fetch(`https://learnit-backend-5t1o.onrender.com/plogin`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify(

              { email: credentials.email, password: credentials.password,childname: credentials.childname}
      
              )
          });

          return response;
       


    } catch (error) {
        console.log("error while adduser",error.message);
    }
}