
//Math1
import React, { useState, useLayoutEffect, useEffect } from 'react';
import Clock from '../../../Clock/Clock';
//import { Mathdata1 } from './Mathdata1';
import QuizResult from '../QuizResult1';
import { postDynamicTestR, postcurrentTestR } from '../../../../../../service/quizapi';
import '../Quiz2.css';
import fetchquiz from '../../../fetchquiz.js';

function Science2({setSelectedOptions,Sciencedata2,selectedOptions,setsubject,setDlive,cSubject}) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [message, setmessage] = useState(null);



    useEffect(() => {
        const postScore = () => {
            setDlive(true)
          let email = localStorage.getItem("email")
      
            postDynamicTestR(email, { science: 0 });
      
        
      
        }
        postScore();
    }, [])
    











    function handleChildDataChange(newChildData) {
        setmessage(newChildData);
        let email = localStorage.getItem("email");
        const cResult = { science: score };
        postDynamicTestR(email, cResult);
    }

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < Sciencedata2.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(selectedOptions[currentQuestion + 1]);
        } else {
            setShowResult(true);
            let email = localStorage.getItem("email");
            const cResult = { science: score };
            postDynamicTestR(email, cResult);
           
        }
    }

    const updateScore = () => {
        if (clickedOption == Sciencedata2[currentQuestion].correct_answer) {
            console.log("score updated");
            setScore(prev=>prev+1);
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
                <p className="heading-txt">Science2 APP</p>
                <div className="container" style={{ width: '1100px' }}>
                    <div style={{ textAlign: '', marginBottom: '20px' }}>
                        <span id="question-count">{currentQuestion + 1}/{Sciencedata2.length}</span>
                    </div>
                    {showResult || message === "Time is up!" ? (
                        <QuizResult
                        cSubject={cSubject}
                        setDlive = {setDlive}
                        setCsubject ={setsubject}
                        data ={Sciencedata2}
                        Options ={selectedOptions}
                            message={message}
                            score={score}
                            totalScore={Sciencedata2.length}
                            tryAgain={resetAll} />
                    ) : (
                        <>
                            <div className="question">
                                <span id="question-number">{currentQuestion + 1}. </span>
                                <span id="question-txt">{Sciencedata2[currentQuestion]?.question}</span>
                            </div>
                            <div className="option-container">
                                {Sciencedata2[currentQuestion]?.options.map((option, i) => {
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
            { !showResult ? <Clock  onChildDataChange={handleChildDataChange} />:null}
        </div>
    )
}

export default Science2;






