import React from 'react';
import './Questions.css'

const Questions = ({ questions }) => {
    const { id, question, correctAnswer, options } = questions;
    
    return (
        <div className='q-div'>
            <h3>{question}</h3>


        </div>
    );
};

export default Questions;