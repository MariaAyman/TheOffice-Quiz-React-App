import React from 'react';

function Levels(props) {
    return (
        <div className='levels-section'>
            <h1>The Office Quiz</h1>
            <h3>Choose a difficulty</h3>
            <div className='difficulty-section'>
                <div className='select'>Easy</div>
                <div className='select'>Meduim</div>
                <div className='select'>Hard</div>
            </div>
        </div>
    );
}

export default Levels;