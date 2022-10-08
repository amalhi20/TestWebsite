import React, { useState } from 'react';

export default function Test1() {
	const questions = [
		{
			questionText: 'What is A teacher gave two test tubes to the students, one containing water and the other containing sodium hydroxide. She asked them to identify the test tube containing sodium hydroxide solution. Which one of the following can be used for the identification? capital of France?',
			answerOptions: [
				{ answerText: 'Blue litmus', isCorrect: false },
				{ answerText: 'Sodium carbonate solution', isCorrect: false },
				{ answerText: 'Red litmus', isCorrect: true },
				{ answerText: 'Dilute hydrochloric acid', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is not physical change?',
			answerOptions: [
				{ answerText: 'Boiling of water to give water vapour', isCorrect: false },
				{ answerText: 'Combustion of Liquefied Petroleum Gas (LPG)', isCorrect: true },
				{ answerText: 'Melting of ice to give water', isCorrect: false },
				{ answerText: 'Dissolution of salt in water', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is Not True with respect to the neutralisation reaction?',
			answerOptions: [
				{ answerText: 'Reactants are in gaseous state.', isCorrect: true },
				{ answerText: 'Salt is formed.', isCorrect: false },
				{ answerText: 'Reaction occurs between an acid and a base.', isCorrect: false },
				{ answerText: 'Reactive element displaces less reactive element.', isCorrect: false },
			],
		},
		{
			questionText: 'Combustion reactions are always',
			answerOptions: [
				{ answerText: 'Sometimes Endothermic', isCorrect: false },
				{ answerText: 'Sometimes exothermic', isCorrect: false },
				{ answerText: 'Endothermic', isCorrect: false },
				{ answerText: 'Exothermic', isCorrect: true },
			],
		},
		{
			questionText: 'Which one of the following processes involve chemical reactions?',
			answerOptions: [
				{ answerText: 'Storing of oxygen gas under pressure in a gas cylinder', isCorrect: false },
				{ answerText: 'Liquefaction of air', isCorrect: false },
				{ answerText: 'Keeping petrol in a China dish in the open', isCorrect: false },
				{ answerText: 'Heating copper wire in presence of air at high temperature', isCorrect: true },
			],
		},
		{
			questionText: 'In the double displacement reaction between aqueous potassium iodide and aqueous lead nitrate, a yellow precipitate of lead iodide is formed. While performing the activity if lead nitrate is not available, which of the following can be used in place of lead nitrate?',
			answerOptions: [
				{ answerText: 'Lead sulphate (insoluble)', isCorrect: false },
				{ answerText: 'Lead acetate', isCorrect: true },
				{ answerText: 'Ammonium nitrate', isCorrect: false },
				{ answerText: 'Potassium sulphate', isCorrect: false },
			],
		},
		{
			questionText: 'In which of the following chemical equations, the abbreviations represent the correct states of the reactants and products involved at reaction temperature?',
			answerOptions: [
				{ answerText: '2H2(l) + O2(l) → 2H2O(g)', isCorrect: false },
				{ answerText: '2H2(g) + O2(l) → 2H2O(l)', isCorrect: false },
				{ answerText: '2H2(g) + O2(g) → 2H2O(l)', isCorrect: false },
				{ answerText: ' 2H2(g) + O2(g) → 2H2O(g)', isCorrect: true },
			],
		},
		{
			questionText: 'When hydrogen chloride gas is prepared on a humid day, the gas is usually passed through the guard tube containing calcium chloride. The role of calcium chloride taken in the guard tube is to',
			answerOptions: [
				{ answerText: 'absorb the evolved gas', isCorrect: false },
				{ answerText: 'moisten the gas', isCorrect: false },
				{ answerText: 'absorb moisture from the gas', isCorrect: true },
				{ answerText: 'absorb Cl– ions from the evolved gas', isCorrect: false },
			],
		},
		{
			questionText: 'Which one of the following salts does not con-tain water of crystallisation?',
			answerOptions: [
				{ answerText: 'Blue vitriol', isCorrect: false },
				{ answerText: 'Baking soda', isCorrect: true },
				{ answerText: 'Washing soda', isCorrect: false },
				{ answerText: 'Gypsum', isCorrect: false },
			],
		},
		{
			questionText: 'In terms of acidic strength, which one of the following is in the correct increasing order?',
			answerOptions: [
				{ answerText: 'Water < Acetic acid < Hydrochloric acid', isCorrect: true },
				{ answerText: 'Water < Hydrochloric acid < Acetic acid', isCorrect: false },
				{ answerText: 'Acetic acid < Water < Hydrochloric acid', isCorrect: false },
				{ answerText: 'Hydrochloric acid < Water < Acetic acid', isCorrect: false },
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