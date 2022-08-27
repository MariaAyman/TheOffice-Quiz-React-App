import React from 'react';

function Question({questions, currQuestion}) {
    return (
        <div className='question-section'>
            <div className='question-count'>
              <span>Question {currQuestion +1}</span>/{questions.length}
            </div>
            <div className='question-text'> {questions[currQuestion].qText} </div>
        </div>
    );
}

export default Question;