import readlineSync from 'readline-sync';

function isEven(n) {
  return n % 2 === 0;
}
function randomNumber() {
  return Math.floor(Math.random() * 10);
}
function evenGame() {
  const number = randomNumber();
  console.log(`Answer "yes" if the number is even, otherwise answer "no" - ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correct = isEven(number) ? 'yes' : 'no';
  return answer === correct;
}
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
