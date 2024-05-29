import React, { useEffect, useState } from 'react'
import { fetchnotices } from '../../service/noticeapi';
import './Inbox.css';

function Inbox() {
  const [notices, setNotices] = useState([]);

  const callasyncfunctin= async()=>{

    let res = await fetchnotices();
    console.log("result is");
   console.log(res);
   res.map((note)=>{
       console.log(note);
       setNotices(prevState => [...prevState, { user: note.user, notice: note.notice }]);
   
   })
   console.log("notices is" );
   console.log(notices);
   }
   
       useEffect(() => {
   callasyncfunctin();
   
       }, [])
  return (
    <div style={{position:"relative" ,justifyContent:"center"  ,   display: "flex",
    position: "relative",
    top: "173px"
   }}>
        <div className='right' style={{
                width: '850px', borderLeft: '1px solid #ccc', padding: '20px', boxSizing: 'border-box',
                backgroundImage: `url("https://i.pinimg.com/600x315/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg")`
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Notices:</h2>
                {notices.map((n, index) => (
                    <div key={index} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)' }}>
                        <strong>{n.user}:</strong> {n.notice}
                    </div>
                ))}
            </div>
      
    </div>
  )
}

export default Inbox