import React from 'react';

import './Options.css';

const Options = ({option, correctAnswer,selectAnswer}) => {

   
    return (
        <div className='options'>
       
            <li className='list'>
            <input type="radio" name="question" id={option} value={option} onChange={selectAnswer}  />
            <label For={option}>{option}</label>
            </li>
            
        
        </div>
    );
};

export default Options;