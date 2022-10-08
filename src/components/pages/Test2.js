import React, { useState } from 'react';

export default function Test2() {
	const questions = [
		{
			questionText: 'What is 12-6?',
			answerOptions: [
				{ answerText: '6', isCorrect: true },
				{ answerText: '4', isCorrect: false },
				{ answerText: '7', isCorrect: false },
				{ answerText: '5', isCorrect: false },
			],
		},
		{
			questionText: 'What number comes after 13?',
			answerOptions: [
				{ answerText: '5', isCorrect: false },
				{ answerText: '12', isCorrect: true },
				{ answerText: '8', isCorrect: false },
				{ answerText: '9', isCorrect: false },
			],
		},
		{
			questionText: 'What is 2+8?',
			answerOptions: [
				{ answerText: '10', isCorrect: true },
				{ answerText: '7', isCorrect: false },
				{ answerText: '9', isCorrect: false },
				{ answerText: '11', isCorrect: false },
			],
		},
		{
			questionText: 'What is 7-4?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '3', isCorrect: true },
			],
		},
        {
			questionText: 'What is 5+9?',
			answerOptions: [
				{ answerText: '17', isCorrect: false },
				{ answerText: '42', isCorrect: false },
				{ answerText: '16', isCorrect: false },
				{ answerText: '14', isCorrect: true },
			],
		},
        {
			questionText: 'What number comes before 18?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '17', isCorrect: true },
			],
		},
        {
			questionText: 'What is 11+7?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '18', isCorrect: true },
				{ answerText: '6', isCorrect: false },
				{ answerText: '17', isCorrect: false },
			],
		},
        {
			questionText: 'What is 20-8?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '28', isCorrect: true },
				{ answerText: '17', isCorrect: false },
			],
		},
        {
			questionText: 'What are the missing numbers?    7... 9... 11',
			answerOptions: [
				{ answerText: '8, 10', isCorrect: true },
				{ answerText: '4,6', isCorrect: false },
				{ answerText: '3,6', isCorrect: false },
				{ answerText: '17,23', isCorrect: false },
			],
		},
        {
			questionText: 'What number comes between 15 and 17?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '16', isCorrect: true },
				{ answerText: '17', isCorrect: false },
			],
		}
        
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
                   
                        <div className='score-section'>
                            You scored {score} out of {questions.length}
                        </div>
                
			) : (
				<>
                 
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
              
				</>
			)}
		</div>
	);
}