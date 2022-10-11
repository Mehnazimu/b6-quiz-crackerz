import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizData = useLoaderData([]);
    const allQuestions = quizData.data.questions;


    return (
        <div>
            {
                allQuestions.map(questions => <Questions
                    key={questions.id}
                    questions={questions}
                ></Questions>)
            }

        </div>
    );
};

export default Quiz;