
//Math1
import React, { useState, useLayoutEffect, useEffect } from 'react';
import Clock from '../../../Clock/Clock';
//import { Mathdata1 } from './Mathdata1';
import QuizResult from '../QuizResult1';
import '../Quiz2.css';
import fetchquiz from '../../../fetchquiz.js';
import { postcurrentTestR,postDynamicTestR } from '../../../../../../service/quizapi';

function Math2(  {setSelectedOptions,Mathdata2,selectedOptions,setsubject,setDlive,cSubject}) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [message, setmessage] = useState(null);


    useEffect(() => {
        const postScore = () => {
            setDlive(true)
          let email = localStorage.getItem("email")
      
            postDynamicTestR(email, { maths: 0 });
      
        
      
        }
        postScore();
    }, [])
    


    useEffect(() => {
        const postScore = () => {
          let email = localStorage.getItem("email")
      
            postDynamicTestR(email, { maths: 0 });
      
        
      
        }
        postScore();
    }, [])




    function handleChildDataChange(newChildData) {
        setmessage(newChildData);
        console.log(newChildData);
        let email = localStorage.getItem("email");
        const cResult = { maths: score };
        postDynamicTestR(email, cResult);
    }

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < Mathdata2.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(selectedOptions[currentQuestion + 1]);
        } else {
            setShowResult(true);
            let email = localStorage.getItem("email");
            const cResult = { maths: score };
            postDynamicTestR(email, cResult);
        }
    }

    const updateScore = () => {
        if (clickedOption == Mathdata2[currentQuestion].correct_answer) {
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
                <div className="container" style={{ width: '1280px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <span id="question-count">{currentQuestion + 1}/{Mathdata2.length}</span>
                    </div>
                    {showResult || message === "Time is up!" ? (
                        <QuizResult
                     
                        cSubject={cSubject}
                        setDlive ={setDlive}
                        setCsubject ={setsubject}
                        data ={Mathdata2}
                        Options ={selectedOptions}
                            message={message}
                            score={score}
                            totalScore={Mathdata2.length}
                            tryAgain={resetAll} />
                    ) : (
                        <>
                            <div className="question">
                                <span id="question-number">{currentQuestion + 1}. </span>
                                <span id="question-txt">{Mathdata2[currentQuestion]?.question}</span>
                            </div>
                            <div className="option-container">
                                {Mathdata2[currentQuestion]?.options.map((option, i) => {
                                    return (
                                        <button

                                            className={`option-btn ${clickedOption == i + 1 ? "checked" : null}`}
                                            key={i}
                                            onClick={() => handleOptionClick(i)}
                                            style={{ background: clickedOption == i + 1 ? 'lightgreen' : 'grey', variant: "contained" }}
                                        >
                                            {option}
                                        </button>
                                    )
                                })}
                            </div>
                   
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <button  id="pre-button" style={{ background: "lightgreen", color: 'black', width: "100px" }} onClick={goToPreviousQuestion}>←</button>
                                <input type="button" value="→" id="next-button" onClick={changeQuestion}style={{ background: "lightgreen",position:"relative",top:"12px", color: "black" }} />
                            </div>
                        </>)}
                </div>
            </div>
            {!showResult ? <Clock  onChildDataChange={handleChildDataChange} />:null}
        </div>
    )
}

export default Math2;






