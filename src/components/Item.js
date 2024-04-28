import React, { useState } from 'react';

const Item = () => {
  const [riddles, setRiddles] = useState([
    {
      id: 1,
      description: 'Самая маленькая старна в мире?',
      option1: 'Люксембург',
      option2: 'Монако',
      option3: 'Ватикан',
      option4: 'Россия',
      correct: 3
    },
    {
      id: 2,
      description: 'Самая длинная река в мире?',
      option1: 'Нил',
      option2: 'Амазонка',
      option3: 'Волга',
      option4: 'Янцзы',
      correct: 2
    },
    {
      id: 3,
      description: 'Сколько субьектов в РФ?',
      option1: '89',
      option2: '83',
      option3: '85',
      option4: '90',
      correct: 3
    },
    
  ]);
  const [userAnswers, setUserAnswers] = useState({});
  const [newRiddleData, setNewRiddleData] = useState({
    description: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correct: 1
  });

  const handleAnswerSelection = (riddleId, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [riddleId]: answer,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRiddleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addRiddle = () => {
    const newRiddle = {
      id: riddles.length + 1,
      description: newRiddleData.description,
      option1: newRiddleData.option1,
      option2: newRiddleData.option2,
      option3: newRiddleData.option3,
      option4: newRiddleData.option4,
      correct: parseInt(newRiddleData.correct)
    };
    setRiddles((prevRiddles) => [...prevRiddles, newRiddle]);
    // Очищаем данные формы после добавления новой загадки
    setNewRiddleData({
      description: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      correct: ''
    });
  };

  return (
    <div>
      {/* Форма для ввода новой загадки */}
      <input type="text" name="description" value={newRiddleData.description} onChange={handleInputChange} placeholder="Описание загадки" />
      <input type="text" name="option1" value={newRiddleData.option1} onChange={handleInputChange} placeholder="Вариант ответа 1" />
      <input type="text" name="option2" value={newRiddleData.option2} onChange={handleInputChange} placeholder="Вариант ответа 2" />
      <input type="text" name="option3" value={newRiddleData.option3} onChange={handleInputChange} placeholder="Вариант ответа 3" />
      <input type="text" name="option4" value={newRiddleData.option4} onChange={handleInputChange} placeholder="Вариант ответа 4" />
      <input type="number" name="correct" min="1" max="4" value={newRiddleData.correct} onChange={handleInputChange} placeholder="Номер правильного ответа" />
      <button onClick={addRiddle}>Добавить новую загадку</button>

      {/* Отображение загадок */}
      {riddles.map((riddle) => {
        const userAnswer = userAnswers[riddle.id];
        const isCorrect = userAnswer === riddle.correct;
        const feedback = isCorrect ? 'Правильный ответ!' : 'Вы ответили неправильно';

        return (
          <div key={riddle.id} className="riddle-container">
            <h3 className="riddle-description">{riddle.description} </h3>
            <ol className="answer-options">
              <li>
                <button className="answer-button" onClick={() => handleAnswerSelection(riddle.id, 1)}>
                  {riddle.option1}
                </button>
              </li>
              <li>
                <button className="answer-button" onClick={() => handleAnswerSelection(riddle.id, 2)}>
                  {riddle.option2}
                </button>
              </li>
              <li>
                <button className="answer-button" onClick={() => handleAnswerSelection(riddle.id, 3)}>
                  {riddle.option3}
                </button>
              </li>
              <li>
                <button className="answer-button" onClick={() => handleAnswerSelection(riddle.id, 4)}>
                  {riddle.option4}
                </button>
              </li>
              {/* Остальные варианты ответов... */}
            </ol>
            {userAnswer && <p className="feedback">{feedback}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Item;