import React from 'react'
import "./Test.css"
import { useNavigate } from 'react-router-dom';
import CurrentScreen2 from './Untaught/CurrentScreen2';
function DyTest({subject}) {
    const navigate = useNavigate();
    function GiveCurrent(params) {
        navigate('/CurrentScreen1')
    }
    function GiveDynamic(params) {
        navigate('/CurrentScreen2')
    }
    return (
<>
{subject == ""?
        <div className="test">
            <div className='tright' >
                <h2 style={{ position: "absolute", top: "169px", fontSize: '25px', color: 'red', fontWeight: '900' }}>Dynamic Content Test</h2>
                <h3 style={{ color: "green", fontWeight: '650', marginBottom: '20px' }}>Read below instructions carefully</h3>
                <div style={{ justifyContent: 'left', fontWeight: '500' }}>
                    <ol className='instructions'>
                        <li>Read all given content carefully before answering.</li>
                        <li>Select your answers legibly from provided options.</li>
                        <li>You can use pencil and paper for rough works</li>
                        <li>Manage your time wisely</li>
                        <li>Review your answers before submitting the exam</li>
                    </ol>
                </div>
                <button onClick={GiveDynamic} className="btn btn-primary">start test</button>
            </div>

        </div>
:
<CurrentScreen2/>
}
</>


    )
}
export default DyTest