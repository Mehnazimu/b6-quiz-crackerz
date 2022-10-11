import React from 'react';
import Options from '../Options/Options';
import './Questions.css'

const Questions = ({ questions }) => {
    const { id, question, correctAnswer, options } = questions;
    
    return (
        <div className='q-div'>
            <h3>{question}</h3>
            {
                options.map(option => <Options
                id={id}
                option ={option}
                ></Options>)
            }


        </div>
    );
};

export default Questions;