import readlineSync from 'readline-sync';
import playGame from '../src/index.js';
import randomNumber from '../src/randomNumber.js';
import greeting from '../src/greeting.js';

const operators = ['+', '-', '*'];

function switchOperator(number1, number2, operator) {
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = String(number1 + number2);
      break;
    case '-':
      correctAnswer = String(number1 - number2);
      break;
    case '*':
      correctAnswer = String(number1 * number2);
      break;
    default:
  }
  return correctAnswer;
}

function calc() {
  const number1 = randomNumber(1, 99);
  const number2 = randomNumber(1, 99);
  const randomOperator = operators[randomNumber(0, 3)];
  console.log('What is the result of the expression?');
  console.log(`Question: ${number1} ${randomOperator} ${number2}  `);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = switchOperator(number1, number2, randomOperator);
  const result = {
    isCorrect: answer === correctAnswer,
    answer,
    correctAnswer,
  };
  return result;
}

export default function brainCalc() {
  const name = greeting();
  playGame(calc, name);
}
