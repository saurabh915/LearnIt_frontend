
//Math1
import React, { useState, useLayoutEffect, useEffect } from 'react';
// import Clock from '../../../Clock/Clock';
import QuizResult from '../QuizResult1';
import '../Quiz1.css';
import fetchquiz from '../../../fetchquiz.js';
import { postcurrentTestR } from '../../../../../../service/quizapi';
import Clock from '../../../Clock/Clock.jsx';

function Math1({Csubject , setCsubject,setlive}) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [message, setmessage] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [Mathdata1, setMathdata1] = useState([]);
    useEffect(() => {
        setlive(true);
        let email = localStorage.getItem("email")
        postcurrentTestR(email, { maths: 0 });
        // eslint-disable-next-line
    }, [])
    useLayoutEffect(() => {
        const fetchingquiz = async () => {
            console.log("fetching quiz");
            let test = await fetchquiz("maths1");
            setMathdata1(test.subjecttest["questions"]);
        
        }
        fetchingquiz();
    }, []);

    function handleChildDataChange(newChildData) {
        setmessage(newChildData);
        let email = localStorage.getItem("email");
        const cResult = { maths: score };
        postcurrentTestR(email, cResult);
        console.log(newChildData);
      
    }

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < Mathdata1.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(selectedOptions[currentQuestion + 1]);
        } else {
            setShowResult(true);
            let email = localStorage.getItem("email");
            const cResult = { maths: score };
            postcurrentTestR(email, cResult);
        }
    }

    const updateScore = () => {
        if (clickedOption === Number(Mathdata1[currentQuestion].correct_answer)) {
            console.log("score updated");
            setScore(score + 1);
        }
    }

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }

    const handleOptionClick = (optionIndex) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[currentQuestion] = optionIndex + 1;
        setSelectedOptions(newSelectedOptions);
        setClickedOption(optionIndex + 1);
    }

    const goToPreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setClickedOption(selectedOptions[currentQuestion - 1]);
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex-center', margin: '0 50px' }}>
                <p className="heading-txt">Math1 APP</p>   
                 {showResult || message === "Time is up!" ? (
                        <QuizResult
                        Csubject ={Csubject}
                        setlive={setlive}
                    setCsubject={setCsubject}
                        data ={Mathdata1}
                        Options ={selectedOptions}
                            message={message}
                            score={score}
                            totalScore={Mathdata1.length}
                            tryAgain={resetAll} />
                    ) : (
                        <> 
                <div className="container" style={{ width: '1100px' }}>
                   
                
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <span id="question-count">{currentQuestion + 1}/{Mathdata1.length}</span>
                    </div>
                            <div className="question">
                                <span id="question-number">{currentQuestion + 1}. </span>
                                <span id="question-txt">{Mathdata1[currentQuestion]?.question}</span>
                            </div>
                            <div className="option-container">
                                {Mathdata1[currentQuestion]?.options.map((option, i) => {
                                    return (
                                        <button

                                            className={`option-btn ${clickedOption === i + 1 ? "checked" : null}`}
                                            key={i}
                                            onClick={() => handleOptionClick(i)}
                                            style={{ background: clickedOption === i + 1 ? 'lightgreen' : 'grey', variant: "contained" }}
                                        >
                                            {option}
                                        </button>
                                    )
                                })}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button  id="pre-button" style={{ background: "lightgreen", color: 'black', width: "100px" }} onClick={goToPreviousQuestion}>←</button>
                                <input type="button" value="→" id="next-button" onClick={changeQuestion} style={{ margin: "130px 0 93px 30px", background: "lightgreen", color: "black" }} />
                            </div>
                </div>
                        </>)}
            </div>
            { !showResult ? <Clock  onChildDataChange={handleChildDataChange} />:null}
        </div>
    )
}

export default Math1;






