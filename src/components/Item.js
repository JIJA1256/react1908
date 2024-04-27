import React, { useState } from 'react';

const Item = () => {
    const [answers, setAnswers] = useState([]);

    const content = [
        {
            'id': 1,
            'description': "Самая маленькая страна в мире?",
			'option1': "Люксембург",
			'option2': "Россия",
			'option3': "Ватикан",
			'option4': "Монако",
			'correct': "3"
        },
        {
            'id': 2,
            'description': "Самая длинная река в мире?",
			'option1': "Ро",
			'option2': "Нил",
			'option3': "Амазонка",
			'option4': "волга",
			'correct': "3"
        },
        {
            'id': 3,
            'description': "Сколько субьектов в РФ?",
			'option1': "89",
			'option2': "83",
			'option3': "88",
			'option4': "90",
			'correct': '3'
        }
    ];

    const handleAnswer = (questionId, selectedOption) => {
        const correctAnswer = content.find(item => item.id === questionId).correct;
        const isCorrect = selectedOption === correctAnswer;
        setAnswers([...answers, { questionId, isCorrect }]);
    };

    return (
        <div>
            {content.map((question) => (
                <div key={question.id}>
                    <h1>Вопрос №{question.id}</h1>
                    <p>{question.description}</p>
                    <button onClick={() => handleAnswer(question.id, '1')}>{question.option1}</button>
                    <button onClick={() => handleAnswer(question.id, '2')}>{question.option2}</button>
                    <button onClick={() => handleAnswer(question.id, '3')}>{question.option3}</button>
                    <button onClick={() => handleAnswer(question.id, '4')}>{question.option4}</button>
                </div>
            ))}
            <div>
                {answers.map((answer, index) => (
                    <p key={index}>{`Вопрос ${answer.questionId}: ${answer.isCorrect ? 'Правильно' : 'Неправильно'}`}</p>
                ))}
            </div>
        </div>
    );
};

export default Item;