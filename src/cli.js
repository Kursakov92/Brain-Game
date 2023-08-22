import readlineSync from 'readline-sync';
import evenGame from '../bin/brain-even.js';
import calc from '../bin/brain-calc.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);
for (let i = 0; i < 3; i += 1) {
  const result = evenGame();
  if (result) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${userName}`);
    }
  }
  if (!result) {
    console.log(`Let's try again ${userName}!`);
    break;
  }
}

export default userName;
