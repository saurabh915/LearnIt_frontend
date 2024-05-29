import React, { useState } from 'react';
import './Makedynamic.css'; // Import the external CSS file

const Makequiz = () => {
    const [questions, setQuestions] = useState([]);
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
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
            setQuestions((prevQuestions) => [...prevQuestions, { subject, ...currentQuestion }]);
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

    const handlePostContent = () => {
        if (content.split(/\s+/).length >= 50) {
            setSubject((prevSubject) => prevSubject); // Retain the subject
            setContent(content);
        } else {
            alert("Please enter at least 50 words of content.");
        }
    };

    const postDynamicQuiz = async(credentials) => {
        try {
            console.log("trying to make request");
            const response = await fetch(`http://localhost:8000/tests`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    { questions: credentials }
                )
            });
            const averageMarks = await response.json();
            return averageMarks;
        } catch (error) {
            console.log("error while adduser", error.message);
        }
    }

    const handleCreateQuiz = async() => {
        console.log('Quiz created:', questions);
        let quiz = { quiztype: "dynamicQuiz", title: subject, content: content, questions: questions }
        await postDynamicQuiz(quiz)
        setQuestions([])
        setContent("");
        setSubject("")
    };

    return (
        <div className="make-quiz-wrapper">
            {/* Left Side */}
            <div className='leftside3'>
                <h2>Create Test</h2>
                <div className="input-container">
                    <div>
                    
                        <select value={subject} onChange={(e)=>{setSubject(e.target.value)}}>
        <option value="">Select a Subject</option>
      
          <option value="science2">Science</option>
          <option  value="maths2">Maths</option>
          <option  value="social2">Social</option>
     
      </select>
                    </div>
                    {/* Post Content Section */}
                    <div>
                        <label>Content:</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <button onClick={handlePostContent}>Post Content</button>
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

            {/* Right Side */}
            <div className="rightside3">
                <h2>Quiz Questions</h2>
                <ul className="quiz-list">
                    {content && (
                        <li>
                            <p>{content}</p>
                        </li>
                    )}
                    {questions.map((q, index) => (
                        <li key={index}>
                            {q.question}
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
