import React from 'react';
import { useNavigate } from 'react-router-dom';
import './instructions.css';

function Instruction() {
    const navigate = useNavigate();

    function GiveCurrent() {
        navigate('/TestScreen');
    }

    return (
        <div
            className="test"
            style={{
               
                   // "url('https://e0.pxfuel.com/wallpapers/412/514/desktop-wallpaper-notice-board-vintage-frame-background-powerpoint-power-point-old-powerpoint.jpg')",
                backgroundImage: "url('./IMG/instruction.jpg')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                height: '120vh',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                className="dynamic"
                style={{
                    width: '60%',
                    height: '500px',
                    background: 'lightblue',
                    textAlign: 'center',
                    borderRadius: '20px',
                    padding: '20px', // Added padding
                    marginTop: '100px', // Added margin top
                }}
            >
                <h3
                    style={{
                        fontSize: '20px',
                        color: 'black',
                        fontWeight: '800',
                        margin: '0 0 50px', // Adjusted margin
                    }}
                >
                    Here are some important points you need to know regarding tests
                </h3>

                <div style={{ fontWeight: '500', justifyContent: 'center', textAlign: 'left' }}>
                    <p>
                        1. We are taking two tests to check your performance which are
                        current syllabus test & dynamic content test
                    </p>
                    <p>
                        2. There are respected subtest for each test according to your
                        school subject
                    </p>
                    <p>
                        3. Current syllabus test is on syllabus taught in your school
                    </p>
                    <p>
                        4. In dynamic content test, we are providing you content and
                        questions are regarding that content
                    </p>
                    <p>
                        5. You can give both tests one after another immediately or can
                        take a break after the first test
                    </p>
                    <p>
                        6. You have to give the 2nd test within 3 days after giving the
                        first test
                    </p>
                </div>
                <h3 style={{ color: 'red', fontWeight: '650', margin: '20px 0 5px' }}> 
                    All the best
                </h3>
                <button
                    style={{
                        width: '200px',
                        background: 'green',
                        marginTop: '5px', // Adjusted margin top
                    }}
                    onClick={GiveCurrent}
                    className="btn btn-primary"
                >
                    Start your first test
                </button>
            </div>
        </div>
    );
}

export default Instruction;
