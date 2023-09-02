import playGame from '../src/index.js';
import greeting from '../src/greeting.js';
import askQuestion from '../src/askQuestion.js';

function isEven(n) {
  return n % 2 === 0;
}

function evenGame() {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".\nQuestion:';
  const { answer, correctAnswer } = askQuestion(question, isEven);
  const result = {
    isCorrect: answer === correctAnswer,
    answer,
    correctAnswer,
  };
  return result;
}

export default function brainEven() {
  const name = greeting();
  playGame(evenGame, name);
}
