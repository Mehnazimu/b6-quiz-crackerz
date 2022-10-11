import React from 'react';
import './Options.css';

const Options = ({option}) => {


    return (
        <div className='options'>
        <div>
            <input type="radio" name="question" id={option} value={option} />
            <label For={option}>{option}</label>
            
         </div>
        </div>
    );
};

export default Options;