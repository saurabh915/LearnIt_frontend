// Takequiz.jsx
import React, { useState, useEffect } from 'react';
import './Takequiz.css';
const Takequiz = ({ quizQuestions }) => {
    const [studentName, setStudentName] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [quizFinished, setQuizFinished] = useState(false);

    useEffect(() => {
        // Initialize selectedOptions array when quizQuestions changes
        setSelectedOptions(Array.isArray(quizQuestions) ? Array(quizQuestions.length).fill(null) : []);
    }, [quizQuestions]);

    const handleOptionChange = (e) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[currentQuestionIndex] = parseInt(e.target.value, 10);
        setSelectedOptions(updatedOptions);
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handleFinishQuiz = () => {
        setQuizFinished(true);
    };

    const calculateScore = () => {
        let score = 0;
        for (let i = 0; i < quizQuestions.length; i++) {
            if (selectedOptions[i] === quizQuestions[i]?.correctOption) {
                score += 1;
            }
        }
        return score;
    };

    useEffect(() => {
        // You can add logic to send quiz results to the server here
        // For simplicity, we are just logging the results
        if (quizFinished) {
            console.log(`Quiz finished for ${studentName}`);
            console.log(`Score: ${calculateScore()} out of ${quizQuestions.length}`);
        }
        // eslint-disable-next-line
    }, [quizFinished, studentName, quizQuestions]);

    // Check if quizQuestions is not defined or empty before rendering
    if (!quizQuestions || quizQuestions.length === 0) {
        return <div>No quiz questions available.</div>;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
            {/* Left Panel - Student Name and Start Quiz */}
            <div style={{ flex: 1, marginRight: '20px' }}>
                <h2>Enter Student Name</h2>
                <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                />
                <button onClick={handleNextQuestion} disabled={!studentName}>
                    Start Quiz
                </button>
            </div>

            {/* Right Panel - Display Quiz Questions */}
            <div style={{ flex: 1 }}>
                {quizFinished ? (
                    <div>
                        <h2>Exam Finished</h2>
                        <button onClick={() => setQuizFinished(false)}>Show Result</button>
                    </div>
                ) : (
                    <div>
                        <h2>Question {currentQuestionIndex + 1}</h2>
                        <p>{quizQuestions[currentQuestionIndex]?.question}</p>
                        <div>
                            {quizQuestions[currentQuestionIndex]?.options.map((option, index) => (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        value={index}
                                        checked={selectedOptions[currentQuestionIndex] === index}
                                        onChange={handleOptionChange}
                                    />
                                    {`Option ${index + 1}: ${option}`}
                                </label>
                            ))}
                        </div>
                        <button onClick={handleNextQuestion} disabled={currentQuestionIndex === quizQuestions.length - 1}>
                            Next Question
                        </button>
                        <button onClick={handleFinishQuiz}>Finish Quiz</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Takequiz;
