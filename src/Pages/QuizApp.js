import React, { useState, useCallback } from 'react';
import StartAgain from '../Components/StartAgain';
import Question from '../Components/Question';
import Choices from '../Components/Choices';
import ErrorMessage from '../Components/ErrorMessage';

function QuizApp({questions, onShuffleChange, shuffle}) {

    const [currQuestion, setCurrQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const handleSelect = (option) => {
        if(selected.aText === option.aText && option.isCorrect === true) return "correct";
        else if(selected.aText === option.aText && option.isCorrect === false) return "incorrect";
        else if(option.isCorrect) return "correct";
    }
    
    const handleCheck = (i) => {
        setSelected(i);
        if(i.isCorrect === true) setScore(score + 1);
        setError(false);
    }
    
    const handleNext = () => {
        if(selected) {
          const nextQuestion = currQuestion + 1;
    
          if (nextQuestion < questions.length) {
            setCurrQuestion(nextQuestion);
          } else {
            setShowScore(true);
          }
    
          setSelected();
        } else{
          setError("Please select an option first!");
        }
    }
    
    const handleStartAgain = useCallback(() => {
        onShuffleChange(shuffle(questions));
        setCurrQuestion(0);
        setShowScore(false);
        setScore(0);
    }, [onShuffleChange]);

    return (
        <>
           {/*Error Msg section */}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <div className='quiz-app'>

            {/* Start again Section */}
            {showScore ? (
            <StartAgain 
                questions={questions} 
                score={score} 
                handleStartAgain={handleStartAgain} />
            ) : (
        <>
            {/* Score Section */}
            <div className='show-score'>{`Score: ${score}`}</div>

                {/* Question Section */}
                <Question 
                    questions={questions} 
                    currQuestion={currQuestion} />
      
                {/* Answers/Choices Section */}
                <Choices 
                    questions={questions} 
                    currQuestion={currQuestion} 
                    selected={selected} 
                    handleSelect={handleSelect} 
                    handleCheck={handleCheck} 
                    handleNext={handleNext} />
        </>
            )}
        </div>

        </>
    );
}

export default QuizApp;