import React from 'react';
import { Link } from 'react-router-dom';

function Levels(props) {
    return (
        <div className='levels-section'>
            {/* <h1>The Office Quiz</h1> */}
            <div className='sign'>
                <img src='sign.jpg' alt='sign' className="sign-img"/>
            </div>
            <h3>Choose a difficulty</h3>
            <div className='difficulty-section'>
                <Link to="/easy" style={{textDecoration: 'none', color: '#fff'}}>
                    <div className='select'>Easy</div>
                </Link>
                <Link to='/meduim' style={{textDecoration: 'none', color: '#fff'}}>
                    <div className='select'>Meduim</div>
                </Link>
                <Link to='/hard' style={{textDecoration: 'none', color: '#fff'}}>
                    <div className='select'>Hard</div>
                </Link>
            </div>
        </div>
    );
}

export default Levels;