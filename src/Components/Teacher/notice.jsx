import React, { useEffect, useState } from 'react';
import { fetchnotices, postNotice } from '../../service/noticeapi';
import './notice.css';

function Inbox() {
    const [user, setUser] = useState('');
    const [notice, setNotice] = useState('');
    const [notices, setNotices] = useState([]);

    const handlePostNotice = async () => {
        if (user.trim() !== '' && notice.trim() !== '') {
            setNotices([...notices, { user, notice }]);
            setUser('');
            console.log("setting notice");
            setNotice('');
        }
        let userId = localStorage.getItem("email")
        await postNotice({ user: userId, notice: notice })
    };

    const handleClearNotice = () => {
        setUser('');
        setNotice('');
    };

    const callAsyncFunction = async () => {
        let res = await fetchnotices();
        setNotices(res);
    };

    useEffect(() => {
        callAsyncFunction();
    }, [notices]);

    return (
        <>
        <div className='chat-container' style={{ display: 'flex', height: '100vh', backgroundColor: '#f4f4f4' }}>
            {/* Left Side */}
            <div className='left' style={{ width: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                    border: "solid black 1px ", borderRadius: '4px', display: 'flex', width: '500px', height: '65rem', padding: '20px', alignItems: 'center', justifyContent: 'center',
                    // backgroundImage: `url("https://cdn.wallpapersafari.com/18/84/kFg5GT.jpg")` // Wrap url in backticks and use template literals
                }}>
                    <div className='inside1' style={{ width: '80%', textAlign: 'center' }}>
                        {/* <label>User ID:</label>
                        <input
                            type="text"
                            placeholder="Enter User ID"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
                        /> */}
                        <label>Notice:</label>
                        <textarea
                            placeholder="Type your notice"
                            value={notice}
                            onChange={(e) => setNotice(e.target.value)}
                            rows={10}
                            // style={{ width: '100%', marginBottom: '10px', padding: '5px 0 0 0' }}
                        ></textarea>
                        <button onClick={handlePostNotice} style={{ marginRight: '5px', marginBottom: "10px" }}>Post Notice</button>
                        <button onClick={handleClearNotice}>Clear</button>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className='rights' >
            {/* // style={{ width: '850px', borderLeft: '1px solid #ccc', padding: '20px', boxSizing: 'border-box', */} 
                {/* // backgroundImage: `url("https://i.pinimg.com/600x315/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg")` */}
            
            
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Notices:</h2>
                {notices.map((n, index) => (
                    <div key={index} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)' }}>
                        <strong>{n.user}:</strong> {n.notice}
                    </div>
                ))}
            </div>

            {/* Media Query */}
            <style>
                {`
                    @media only screen and (max-width: 768px) {
                        .left, .rights {
                            width: 100%;
                        }
                        .rights {
                            padding: 10px;
                        }
                        .left > div {
                            width: 90%;
                        }
                    }
                `}
            </style>
        </div>
        </>
    );
}

export default Inbox;
