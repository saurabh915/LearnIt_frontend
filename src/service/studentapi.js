
const url = "http://localhost:8000"
export const slogin = async(credentials)=>{
    try {

        const response = await fetch(`http://localhost:8000/slogin`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify(

              { email: credentials.email, password: credentials.password}
      
              )
          });

          return response;
       


    } catch (error) {
        console.log("error while adduser",error.message);
    }
}