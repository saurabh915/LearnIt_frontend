import React, { useState, useEffect } from "react";
import axios from 'axios';

const Feedback = () => {


  const [data, setData] = useState([]);
  const [monthValue, setMonthValue] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [avgFeelAvg, setAvgFeelAvg] = useState(-1);
  const [avgSatisfy, setAvgSatisfy] = useState(-1);
  const [monthName, setMonthName] = useState('');
   
  const callFeedbacksByFilter = async() =>{

    try{
    const response = await axios.get('http://localhost:8000/getFeedbackByFilter');
    // console.log(response.data);

    if(response.data.length > 0)
      {
      
        var sumFeel=0;
        var sumSatisfy=0;

         
        for(var i=0;i<response.data.length;i++){
             sumFeel+=parseInt(response.data[i].feel);
             sumSatisfy+=parseInt(response.data[i].satisfy);
        }

        var tot = response.data.length*4;

        // console.log((sumFeel*100/tot));
        // console.log((sumSatisfy*100/tot));

        setAvgFeelAvg((sumFeel*100/tot));
        setAvgSatisfy((sumSatisfy*100/tot));

      setMonthName('');
      setMonthValue('');
      setYearValue('');


      setData(response.data)
      return;
     

    }
      
      setAvgFeelAvg(-1);
      setAvgSatisfy(-1);


      setMonthName('');
      setMonthValue('');
      setYearValue('');
      
      setData(response.data);
      return;


    }catch(err){
      console.log(err);
    }
    
  };

  useEffect(() => {
    callFeedbacksByFilter();
  }, [])

  const handleFilter = async(e) =>{

    e.preventDefault();

    console.log("year",yearValue);
    console.log("month",monthValue);



    if(monthValue!== '' && yearValue!== ''){
      console.log(`http://localhost:8000/getFeedbackByFilter?year=${yearValue}&&month?=${monthValue}`);
        try {
          const response = await axios.get(`http://localhost:8000/getFeedbackByFilter?year=${yearValue}&&month=${monthValue}`);
         // console.log(response.data);


         if(response.data.length > 0)
          {


          var sumFeel=0;
          var sumSatisfy=0;

           
          for(var i=0;i<response.data.length;i++){
               sumFeel+=parseInt(response.data[i].feel);
               sumSatisfy+=parseInt(response.data[i].satisfy);
          }

          var tot = response.data.length*4;

          // console.log((sumFeel*100/tot));
          // console.log((sumSatisfy*100/tot));
  
          setAvgFeelAvg((sumFeel*100/tot));
          setAvgSatisfy((sumSatisfy*100/tot));


          setData(response.data);
          return;
         

        }


        

          setAvgFeelAvg(-1);
          setAvgSatisfy(-1);
          setData(response.data);
          return;


        }catch(err){
          console.log(err);
        }
        
    }

    if(monthValue === '' && yearValue!== ''){
      console.log(`http://localhost:8000/getFeedbackByFilter?year=${yearValue}`);
      try {
        const response = await axios.get(`http://localhost:8000/getFeedbackByFilter?year=${yearValue}`);
       // console.log(response.data);

        if(response.data.length > 0)
          {
          
            var sumFeel=0;
            var sumSatisfy=0;
  
             
            for(var i=0;i<response.data.length;i++){
                 sumFeel+=parseInt(response.data[i].feel);
                 sumSatisfy+=parseInt(response.data[i].satisfy);
            }
  
            var tot = response.data.length*4;
  
            // console.log((sumFeel*100/tot));
            // console.log((sumSatisfy*100/tot));

            setAvgFeelAvg((sumFeel*100/tot));
            setAvgSatisfy((sumSatisfy*100/tot));
    

          setData(response.data)
          return;
         

        }
          
          setAvgFeelAvg(-1);
          setAvgSatisfy(-1);
          
          setData(response.data);
          return;

      }catch(err){
        console.log(err);
      }
      
  }
  
  if(monthValue!=='' && yearValue === ''){
     
     
      const response = {
        data : []
      };

      //console.log(response.data);


      if(response.data.length > 0)
        {
       

          setAvgFeelAvg(-1);
          setAvgSatisfy(-1);

        setData(response.data)
        return;
       

      }

      setAvgFeelAvg(-1);
      setAvgSatisfy(-1);
  
        setData(response.data);
        return;



  }

 // window.location.reload();



  };


  const handleMonthChange = (e) =>{
      setMonthValue(e.target.value);
  
  };

  const handleYearChange = (e) =>{
      setYearValue(e.target.value);
  };


  
  return (
      <>
      <center>
      <h4 className="mt-5">Feedback dashboard:  {monthValue === '1' ? 'January' :
          monthValue === '2' ? 'February' :
          monthValue === '3' ? 'March' :
          monthValue === '4' ? 'April' :
          monthValue === '5' ? 'May' :
          monthValue === '6' ? 'June' :
          monthValue === '7' ? 'July' :
          monthValue === '8' ? 'August' :
          monthValue === '9' ? 'September' :
          monthValue === '10' ? 'October' :
          monthValue === '11' ? 'November' :
          monthValue === '12' ? 'December' :
          'All span'}  {yearValue}
      </h4>
      <div class="col-8">
          <form onSubmit={handleFilter}>
            <input type="text" placeholder="Month in number" className="form-control" name="month" value={monthValue} onChange={handleMonthChange} /> 
            <input type="text" placeholder="Year" className="form-control" name="year" value={yearValue} onChange={handleYearChange} /> 
          <button type="submit" className="btn btn-success mt-2">Submit</button>
          </form>

          <button onClick={callFeedbacksByFilter} className="btn btn-success mt-2">All span</button>

        </div>



      <div className='col-8 mt-5'>
      <table className="table mt-3">
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Feel</th>
                    <th>Satisfy</th>
                    <th>Additional Feedback</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((item, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.feel}</td>
                        <td>{item.satisfy}</td>
                        <td>{item.additional_feedback}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>

     
      </center>

      <div className="col-8">

     <p><b>Progress </b> : {avgFeelAvg + ' %'} &nbsp;&nbsp; <b>Satisfaction</b> : {avgSatisfy +' %'} </p>




</div>
    </>
  )
}

export default Feedback