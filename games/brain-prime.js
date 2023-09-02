import playGame from '../src/index.js';
import greeting from '../src/greeting.js';
import askQuestion from '../src/askQuestion.js';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

function primeGame() {
  const question = '`Answer "yes" if given number is prime. Otherwise answer "no". \nQuestion:';
  const { answer, correctAnswer } = askQuestion(question, isPrime);
  const result = {
    isCorrect: answer === correctAnswer,
    answer,
    correctAnswer,
  };
  return result;
}

export default function brainPrime() {
  const name = greeting();
  playGame(primeGame, name);
}
