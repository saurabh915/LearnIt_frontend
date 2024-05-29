import React, { useEffect } from 'react'
import './testReview.css'
function TestReview({data,options}) {
    useEffect(() => {
console.log("options are",options);
    }, [])
    
  return (
    <div style={{width:"900px",height:"530px", overflow:"auto"}}>
        <h1 style={{textAlign:"left",margin:"10px",overflow:'auto'}}> Review Your Test</h1>
        {/* <div className="question">
                                <span id="question-number">{currentQuestion + 1}. </span>
                                <span id="question-txt">{Socialdata1[currentQuestion]?.question}</span>
                            </div>
                            <div className="option-container">
                            
                                {Socialdata1[currentQuestion]?.options.map((option, i) => {
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
                            </div> */}

                          
                            <div className='testreview'>
      {data.map((questionObj, index) => (
        <div className="que" key={index}>
          <h3>{index+1}. {questionObj.question}</h3>
          <ul>
            {questionObj.options.map((option, optionIndex) => (
             
              <li key={optionIndex} className={questionObj.correct_answer == optionIndex+1 ?'correct ': options[index] == optionIndex+1 ? 'wrong':'normal' }>{optionIndex+1}. {option}</li>
            ))}
          </ul>
          <p>Correct Answer: {questionObj.correct_answer}</p>
        </div>
      ))}
    </div>
                           
    </div>
  )
}

export default TestReview