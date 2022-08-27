import React from 'react';
import NextButton from './NextButton';

function Choices({questions, currQuestion, selected, handleSelect, handleCheck, handleNext}) {
    return (
        <div className='answer-section'>
	          {questions[currQuestion].options.map((option, i) => (
		          <button
                className={`singleOption ${selected && handleSelect(option)}`} 
                key={i} 
                //onClick={() => handleAnswers(option.isCorrect)}
                onClick={() => handleCheck(option)}
                disabled={selected}
                >
                  {option.aText}
              </button>
	          ))}

            {/* Next button Section */}
            <NextButton handleNext={handleNext} currQuestion={currQuestion} questions={questions} />
          </div>
    );
}

export default Choices;