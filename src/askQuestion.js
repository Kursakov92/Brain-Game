import readlineSync from 'readline-sync';
import randomNumber from './randomNumber.js';

export default function askQuestion(question, func) {
  const number = randomNumber(1, 99);
  console.log(`${question} ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = func(number) ? 'yes' : 'no';
  return { answer, correctAnswer };
}
