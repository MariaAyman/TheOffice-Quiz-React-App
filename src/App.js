import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './Components/Footer';

import Levels from './Pages/Levels';
import QuizApp from './Pages/QuizApp';

function App() {
  /*const questions = [
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
        { aText: 'Kurk', isCorrect: false},
        { aText: 'Karl', isCorrect: false},
        { aText: 'Kurt', isCorrect: true},
        { aText: 'Keith', isCorrect: false},
      ],
    },
  ];*/

  const easyQuestions = [
    {
      qText: "What is the name of the paper company they work at?",
      options: [
        { aText: 'Dunder Muffin', isCorrect: false},
        { aText: 'Dunebury Moff', isCorrect: false},
        { aText: 'Dunder Mifflin', isCorrect: true},
        { aText: 'Dinder Moss', isCorrect: false},
      ],
    },
    {
      qText: "What's the name of their city?",
      options: [
        { aText: 'Spectron', isCorrect: false},
        { aText: 'Scranton', isCorrect: true},
        { aText: 'Seville', isCorrect: false},
        { aText: 'Shectar', isCorrect: false},
      ],
    },
    {
      qText: "Which state the office is located?",
      options: [
        { aText: 'Pennsylvania', isCorrect: true},
        { aText: 'Ohio', isCorrect: false},
        { aText: 'Massachusetts', isCorrect: false},
        { aText: 'Illinois', isCorrect: false},
      ],
    },
    {
      qText: "Who is the Vice President of Sales who dates Michael?",
      options: [
        { aText: 'Stanley', isCorrect: false},
        { aText: 'Holly', isCorrect: false},
        { aText: 'Jan', isCorrect: true},
        { aText: 'Creed', isCorrect: false},
      ],
    },
    {
      qText: "Who does Jim end up with?",
      options: [
        { aText: 'Angela', isCorrect: false},
        { aText: 'Katey', isCorrect: false},
        { aText: 'Karen', isCorrect: false},
        { aText: 'Pam', isCorrect: true},
      ],
    },
    {
      qText: "What does Jim love doing to Dwight?",
      options: [
        { aText: 'Pranking him', isCorrect: true},
        { aText: 'Stealing his customers', isCorrect: false},
        { aText: 'Ruining his dates', isCorrect: false},
        { aText: 'Asking him questions', isCorrect: false},
      ],
    },
    {
      qText: "Which character does Michael hate?",
      options: [
        { aText: 'Ryan', isCorrect: false},
        { aText: 'Toby', isCorrect: true},
        { aText: 'Oscar', isCorrect: false},
        { aText: 'Kevin', isCorrect: false},
      ],
    },
    {
      qText: "What department is Pam a part of at the beginning of the show?",
      options: [
        { aText: 'Sales', isCorrect: false},
        { aText: 'HR', isCorrect: false},
        { aText: 'IT', isCorrect: false},
        { aText: 'Reception', isCorrect: true},
      ],
    },
    {
      qText: "Who does Dwight have a relationship with?",
      options: [
        { aText: 'Phyllis', isCorrect: false},
        { aText: 'Meredith', isCorrect: false},
        { aText: 'Angela', isCorrect: true},
        { aText: 'Kelly', isCorrect: false},
      ],
    },
    {
      qText: "What does Michael's mug say?",
      options: [
        { aText: '#1 Boss of all Time', isCorrect: false},
        { aText: 'My employees love me', isCorrect: false},
        { aText: 'Best Boss Ever', isCorrect: false},
        { aText: "World's Best Boss", isCorrect: true},
      ],
    },
  ];

  const medQuestions = [
    {
      qText: "What kind of farm does Dwight own?",
      options: [
        { aText: 'A cabbage farm', isCorrect: false},
        { aText: 'A beet farm', isCorrect: true},
        { aText: 'A carrot farm', isCorrect: false},
        { aText: 'A wheat farm', isCorrect: false},
      ],
    },
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
      qText: "Who bought Michael's “World's Best Boss” mug?",
      options: [
        { aText: 'Michael', isCorrect: true},
        { aText: 'Jim', isCorrect: false},
        { aText: 'Pam', isCorrect: false},
        { aText: 'Dwight', isCorrect: false},
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
      qText: "Who does Stanley's daughter flirt with on, Take Your Daughter To Work Day?",
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
      qText: "Which of Angela's cats does Dwight freeze?",
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
  ];

  const hardQuestions = [
    {
      qText: "What's the title of the movie Michael writes?",
      options: [
        { aText: 'Nightmare in Scranton', isCorrect: false},
        { aText: 'Level One:Midnight', isCorrect: false},
        { aText: 'Threat Level Midnight', isCorrect: true},
        { aText: 'Return of Dawn', isCorrect: false},
      ],
    },
    {
      qText: "What's Dwight's middle name?",
      options: [
        { aText: 'Kurk', isCorrect: false},
        { aText: 'Karl', isCorrect: false},
        { aText: 'Kurt', isCorrect: true},
        { aText: 'Keith', isCorrect: false},
      ],
    },
    {
      qText: "What does Pam study at the Pratt Institute?",
      options: [
        { aText: 'Painting', isCorrect: false},
        { aText: 'Graphic Design', isCorrect: true},
        { aText: 'Drawing', isCorrect: false},
        { aText: 'Photgraphy', isCorrect: false},
      ],
    },
    {
      qText: "How long was Andy carrying an engagement ring in his wallet before proposing to Angela?",
      options: [
        { aText: '3 days', isCorrect: false},
        { aText: '7 months', isCorrect: false},
        { aText: '2 years', isCorrect: false},
        { aText: '6 years', isCorrect: true},
      ],
    },
    {
      qText: "Who defeats Kevin in poker in the episode 'Casino Night'?",
      options: [
        { aText: 'Jim', isCorrect: false},
        { aText: 'Phyllis', isCorrect: true},
        { aText: 'Kelly', isCorrect: false},
        { aText: 'Dwight', isCorrect: false},
      ],
    },
    {
      qText: "What hobby does Stanley take up after retiring?",
      options: [
        { aText: 'Golf', isCorrect: false},
        { aText: 'Knitting', isCorrect: false},
        { aText: 'Wood carving', isCorrect: true},
        { aText: 'Baking', isCorrect: false},
      ],
    },
    {
      qText: "Which Dundie Award does Phyllis win?",
      options: [
        { aText: 'Fine work award', isCorrect: false},
        { aText: 'Most Potential Award', isCorrect: false},
        { aText: 'Moving on up Award', isCorrect: false},
        { aText: 'Busiest Beaver Award', isCorrect: true},
      ],
    },
    {
      qText: "Why does Toby leave Dunder Mifflin in the episode 'Goodbye, Toby'?",
      options: [
        { aText: 'He gets fired', isCorrect: false},
        { aText: 'To find love', isCorrect: false},
        { aText: 'He got a new job in New York', isCorrect: false},
        { aText: 'He decide to move to Costa Rica', isCorrect: true},
      ],
    },
    {
      qText: "What's the full name listed on Creed's passport?",
      options: [
        { aText: 'William Charles Sullivan', isCorrect: false},
        { aText: 'William Charles Schneider', isCorrect: true},
        { aText: 'William Charles Smith', isCorrect: false},
        { aText: 'William Creed Stewar', isCorrect: false},
      ],
    },
    {
      qText: "What's the name of the new Dunder Mifflin initiative Ryan proposes to rebrand the company?",
      options: [
        { aText: 'Dunder Mifflin Infinity', isCorrect: true},
        { aText: 'Dunder Mifflin Premium', isCorrect: false},
        { aText: 'Dunder Mifflin 2.0', isCorrect: false},
        { aText: 'Dunder Mifflin Ultimate', isCorrect: false},
      ],
    },
  ];

  //shuffle questions
  const shuffle = (arr) => {
    let currIndex = arr.length;
    let randomIndex;

    //while there are elements to shuffle
    while(currIndex !== 0){
        //pick a remaining element 
        randomIndex = Math.floor(Math.random() * currIndex);
        currIndex--;

        //swap it with the curr element
        [arr[currIndex], arr[randomIndex]] = [arr[randomIndex], arr[currIndex]];
    }
    //console.log(arr);

    return arr;
  }

  /*const [easyShuffle, setEasyShuffle] = useState([shuffle(easyQuestions)]);
  const [medShuffle, setMedShuffle] = useState([shuffle(medQuestions)]);
  const [hardShuffle, setHardShuffle] = useState([shuffle(hardQuestions)]);*/

  return (
    <>

    <Routes>
      <Route exact path="/" element={<Levels />} />
      {/* <Route path='/easy' element={<QuizApp questions={easyQuestions} onShuffleChange={setEasyShuffle} shuffle={shuffle} />} />
      <Route path='/meduim' element={<QuizApp questions={medQuestions} onShuffleChange={setMedShuffle} shuffle={shuffle} />} />
      <Route path='/hard' element={<QuizApp questions={hardQuestions} onShuffleChange={setHardShuffle} shuffle={shuffle} />} /> */}
      <Route path='/easy' element={<QuizApp questions={easyQuestions} shuffle={shuffle} />} />
      <Route path='/meduim' element={<QuizApp questions={medQuestions} shuffle={shuffle} />} />
      <Route path='/hard' element={<QuizApp questions={hardQuestions} shuffle={shuffle} />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
