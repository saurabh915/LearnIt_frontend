
//Math1
import React, { useState, useLayoutEffect, useEffect } from 'react';
import Clock from '../../../Clock/Clock';
//import { Mathdata1 } from './Mathdata1';
import QuizResult from '../QuizResult1';
import '../Quiz1.css';
import fetchquiz from '../../../fetchquiz.js';
import { postcurrentTestR } from '../../../../../../service/quizapi';

function Science1({Csubject ,setlive,setCsubject}) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [message, setmessage] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [Sciencedata1, setSciencedata1] = useState([]);





    useEffect(() => {
        setlive(true);
        let email = localStorage.getItem("email")
        postcurrentTestR(email, { science: 0 });
    }, [])
    
    useLayoutEffect(() => {
        const fetchingquiz = async () => {
            console.log("fetching quiz");
            let test = await fetchquiz("science1");
            const scienceData = test.subjecttest["questions"];
            setSciencedata1(scienceData);
            setSelectedOptions(new Array(scienceData.length).fill(0));
        }
        fetchingquiz();
    }, []);

    function handleChildDataChange(newChildData) {
        setmessage(newChildData);
        console.log(newChildData);
        let email = localStorage.getItem("email");
        const cResult = { science: score };
        postcurrentTestR(email, cResult);
     
    }

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < Sciencedata1.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(selectedOptions[currentQuestion + 1]);
        } else {
            setShowResult(true);
            let email = localStorage.getItem("email");
            const cResult = { science: score };
            postcurrentTestR(email, cResult);
    
        }
    }

    const updateScore = () => {
        if (clickedOption == Sciencedata1[currentQuestion].correct_answer) {
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
                <p className="heading-txt">Science1 APP</p>
                  {showResult || message === "Time is up!" ? (
                        <QuizResult
                        Csubject = {Csubject}
                        setlive = {setlive}
                        setCsubject={setCsubject}
                        data ={Sciencedata1}
                        Options ={selectedOptions}
                        selectedOptions = {selectedOptions}
                            message={message}
                            score={score}
                            totalScore={Sciencedata1.length}
                            tryAgain={resetAll} />
                    ) : (
                        <>
                <div className="container" style={{ width: '1100px' }}>  
              
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <span id="question-count">{currentQuestion + 1}/{Sciencedata1.length}</span>
                    </div>
                  
                            <div className="question">
                                <span id="question-number">{currentQuestion + 1}. </span>
                                <span id="question-txt">{Sciencedata1[currentQuestion]?.question}</span>
                            </div>
                            <div className="option-container">
                                {Sciencedata1[currentQuestion]?.options.map((option, i) => {
                                    return (
                                        <button

                                            className={`option-btn ${clickedOption == i + 1 ? "checked" : null}`}
                                            key={i}
                                            onClick={() => handleOptionClick(i)}
                                            style={{ background: clickedOption == i + 1 ? 'lightgreen' : 'white', variant: "contained" }}
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
            {/* { !showResult ? <Clock  onChildDataChange={handleChildDataChange} />:null} */}
        </div>
    )
}

export default Science1;






