import React from 'react';
import './App.css';
import Levels from './Pages/Levels';
import QuizApp from './Pages/QuizApp';

function App() {
  const questions = [
    {
      qText: "Who dates Pam's mother?",
      options: [
        { aText: 'Dwight', isCorrect: false},
        { aText: 'Michael', isCorrect: true},
        { aText: 'Kevin', isCorrect: false},
        { aText: 'Toby', isCorrect: false},
      ],
    },
    {
      qText: "Pam convinces which coworker that he's being recruited by the CIA?",
      options: [
        { aText: 'Jim', isCorrect: false},
        { aText: 'Andy', isCorrect: false},
        { aText: 'Ryan', isCorrect: false},
        { aText: 'Dwight', isCorrect: true},
      ],
    },
    {
      qText: "Who bought Michael's “World's Best Boss” mug?",
      options: [
        { aText: 'Michael', isCorrect: true},
        { aText: 'Jim', isCorrect: false},
        { aText: 'Pam', isCorrect: false},
        { aText: 'Dwight', isCorrect: false},
      ],
    },
    {
      qText: "Who does Michael hit with a car?",
      options: [
        { aText: 'Phyllis', isCorrect: false},
        { aText: 'Stanley', isCorrect: false},
        { aText: 'Meredith', isCorrect: true},
        { aText: 'Kevin', isCorrect: false},
      ],
    },
    {
      qText: "Who can raise and lower his cholesterol at will?",
      options: [
        { aText: 'Creed', isCorrect: false},
        { aText: 'Kelly', isCorrect: false},
        { aText: 'Angela', isCorrect: false},
        { aText: 'Dwight', isCorrect: true},
      ],
    },
    {
      qText: "Who does Stanley’s daughter flirt with on, Take Your Daughter To Work Day?",
      options: [
        { aText: 'Jim', isCorrect: false},
        { aText: 'Ryan', isCorrect: true},
        { aText: 'Dwight', isCorrect: false},
        { aText: 'Andy', isCorrect: false},
      ],
    },
    {
      qText: "Who runs the warehouse?",
      options: [
        { aText: 'Darryl', isCorrect: true},
        { aText: 'Roy', isCorrect: false},
        { aText: 'Hank', isCorrect: false},
        { aText: 'Todd', isCorrect: false},
      ],
    },
    {
      qText: "Which of Angela’s cats does Dwight freeze?",
      options: [
        { aText: 'Ember', isCorrect: false},
        { aText: 'Sprinkles', isCorrect: true},
        { aText: 'Lumpy', isCorrect: false},
        { aText: 'Petals', isCorrect: false},
      ],
    },
    {
      qText: "Who served on the jury for the Scranton Strangler case?",
      options: [
        { aText: 'Holly', isCorrect: false},
        { aText: 'Toby', isCorrect: true},
        { aText: 'Dwight', isCorrect: false},
        { aText: 'Gabe', isCorrect: false},
      ],
    },
    {
      qText: "What's Dwight's middle name?",
      options: [
        { aText: 'Burt', isCorrect: false},
        { aText: 'Murt', isCorrect: false},
        { aText: 'Kurt', isCorrect: true},
        { aText: 'Surt', isCorrect: false},
      ],
    },
  ];

  /*const handleAnswers = (isCorrect) => {
    if(isCorrect){
      setScore(score +1);
    }

    const nextQuestion = currQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }*/

  return (
    <>

    {/* <QuizApp questions={questions}/> */}
    <Levels />

    </>
  );
}

export default App;
