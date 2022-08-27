import React, { useState } from 'react';
import StartAgain from '../Components/StartAgain';
import Question from '../Components/Question';
import Choices from '../Components/Choices';
import ErrorMessage from '../Components/ErrorMessage';

function QuizApp({questions}) {

    //shuffle questions
    const shuffle = (arr) => {
        let currIndex = arr.length;
        let randomIndex;

        //while there are elements to shuffle
        while(currIndex != 0){
            //pick a remaining element 
            randomIndex = Math.floor(Math.random() * currIndex);
            currIndex--;

            //swap it with the curr element
            [arr[currIndex], arr[randomIndex]] = [arr[randomIndex], arr[currIndex]];
        }

        return arr;
    }

    const [shuffledQues, setShuffle] = useState(shuffle(questions));
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
    
          if (nextQuestion < shuffledQues.length) {
            setCurrQuestion(nextQuestion);
          } else {
            setShowScore(true);
          }
    
          setSelected();
        } else{
          setError("Please select an option first!");
        }
    }
    
    const handleStartAgain = () => {
        setShuffle(shuffle(questions));
        setCurrQuestion(0);
        setShowScore(false);
        setScore(0);
    }

    return (
        <>
           {/*Error Msg section */}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <div className='quiz-app'>

            {/* Start again Section */}
            {showScore ? (
            <StartAgain 
                questions={shuffledQues} 
                score={score} 
                handleStartAgain={handleStartAgain} />
            ) : (
        <>
            {/* Score Section */}
            <div className='show-score'>{`Score: ${score}`}</div>

                {/* Question Section */}
                <Question 
                    questions={shuffledQues} 
                    currQuestion={currQuestion} />
      
                {/* Answers/Choices Section */}
                <Choices 
                    questions={shuffledQues} 
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