import React from 'react';

function StartAgain({questions, score, handleStartAgain}) {
    return (
        <div className='score-section'>
          Score: {score} / {questions.length}
          <button className='singleOption' onClick={handleStartAgain}>Start Again</button>
        </div>
    );
}

export default StartAgain;