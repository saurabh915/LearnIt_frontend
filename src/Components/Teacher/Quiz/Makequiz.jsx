import React, { useState } from 'react';
import './Makequiz.css'; // Import the external CSS file

const Makequiz = () => {
    const [questions, setQuestions] = useState([]);
    const [subject, setSubject] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState({
        question: '',
        options: ['', '', '', ''],
        correct_answer: '',
    });

    const handleInputChange = (index, value) => {
        setCurrentQuestion((prevQuestion) => {
            const newOptions = [...prevQuestion.options];
            newOptions[index] = value;
            return { ...prevQuestion, options: newOptions };
        });
    };

    const handleAddQuestion = () => {
        if (validateQuestion(currentQuestion)) {
            setQuestions((prevQuestions) => [...prevQuestions, {...currentQuestion }]);
            setCurrentQuestion({
                question: '',
                options: ['', '', '', ''],
                correct_answer: '',
            });
        } else {
            alert("Please add all required fields (Question, Options, Answer).");
        }
    };

    const validateQuestion = (question) => {
        return (
            question.question.trim() !== '' &&
            question.options.every((option) => option.trim() !== '') &&
            question.correct_answer.trim() !== ''
        );
    };

    const postCurrentQuiz = async(credentials)=>{
        try {
            if(questions.length == 10)
                
                {

                    console.log("trying to make request");
                    const response = await fetch("http://localhost:8000/tests", {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(
                            { questions: credentials}
                        )
                    });
                    const averageMarks = await response.json();
                    return averageMarks;
                }
                else{
                    alert("Request faild! , Number of questions should be 10")
                }
                } catch (error) {
            console.log("error while adduser",error.message);
        }
    }

    const handleCreateQuiz = async() => {
        console.log('Quiz created:', questions);
        let quiz = {quiztype:"currentQuiz",title:subject, questions:questions}
        await postCurrentQuiz(quiz)
        setQuestions([])
    };

    return (
        <div className="make-quiz-wrapper">
            <div className='leftside1'>
                <h2>Add Question</h2>
                <div className="input-container">
                <div>
                    
                    <select value={subject} onChange={(e)=>{setSubject(e.target.value)}}>
    <option value="">Select a Subject</option>
  
      <option value="science1">Science</option>
      <option  value="maths1">Maths</option>
      <option  value="social1">Social</option>
 
  </select>
                </div>
                    <div>
                        <label>Question:</label>
                        <input
                            type="text"
                            value={currentQuestion.question}
                            onChange={(e) =>
                                setCurrentQuestion((prevQuestion) => ({
                                    ...prevQuestion,
                                    question: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div>
                        <label>Options:</label>
                        {currentQuestion.options.map((option, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    value={option}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                    <div>
                        <label>Answer:</label>
                        <input
                            type="text"
                            value={currentQuestion.correct_answer}
                            onChange={(e) =>
                                setCurrentQuestion((prevQuestion) => ({
                                    ...prevQuestion,
                                    correct_answer: e.target.value,
                                }))
                            }
                        />
                    </div>
                </div>
                <button onClick={handleAddQuestion}>Add Question</button>
                <button onClick={handleCreateQuiz}>Create Quiz</button>
            </div>
            <div className="rightside">
                <h2>Quiz Questions</h2>
                <ul className="quiz-list">
                    {questions.map((q, index) => (
                        <li key={index}>
                            <h3><strong>{q.subject}</strong> - {q.question}</h3>
                            <ol>
                                {q.options.map((option, i) => (
                                    <li key={i}>{option}</li>
                                ))}
                            </ol>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Makequiz;
