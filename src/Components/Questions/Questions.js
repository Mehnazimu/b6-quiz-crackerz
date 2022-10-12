import React, { useState } from 'react';
import Options from '../Options/Options';
import './Questions.css'

const Questions = ({ questions }) => {
    const { id, question, correctAnswer, options } = questions;
    const [answer, setAnswer] =useState(0);
    const selectAnswer = event =>{
        const target = event.target;
        const selectedAnswer = target.value;
      
    }
    return (
        <div className='q-div'>
            <h3>{question}</h3>
            <div>
            {
                options.map(option => <Options
                id={id}
                option ={option}
                correctAnswer={correctAnswer}
                selectAnswer={selectAnswer}

                ></Options>)
            }


            </div>
        </div>
    );
};

export default Questions;