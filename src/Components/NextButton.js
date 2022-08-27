import React from 'react';

function NextButton({handleNext, currQuestion, questions}) {
    return (
        <div className='next-section'>
            <button 
                className='next-button'
                onClick={handleNext}
            >
                {currQuestion > questions.length ? "Submit" : "Next"}
            </button>
        </div>
    );
}

export default NextButton;