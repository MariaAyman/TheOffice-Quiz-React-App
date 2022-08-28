import React from 'react';
import { Link } from 'react-router-dom';

function StartAgain({questions, score, handleStartAgain}) {
    return (
        <div className='score-section'>
          Score: {score} / {questions.length}
          <div className='end-buttons'>
            <button 
              className='singleOption' 
              onClick={handleStartAgain}>
                Start Again
            </button>
            <Link to='/'>
              <button 
                className='singleOption'
                onClick={handleStartAgain}>
                  Exit
              </button>
            </Link>
          </div>
        </div>
    );
}

export default StartAgain;