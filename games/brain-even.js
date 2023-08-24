import readlineSync from 'readline-sync';
import playGame from '../src/index.js';
import randomNumber from '../src/randomNumber.js';
import greeting from '../src/greeting.js';

function isEven(n) {
  return n % 2 === 0;
}

function evenGame() {
  const number = randomNumber(1, 99);
  console.log(`Answer "yes" if the number is even, otherwise answer "no" - ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correct = isEven(number) ? 'yes' : 'no';
  return answer === correct;
}

export default function brainEven() {
  const name = greeting();
  playGame(evenGame, name);
}
