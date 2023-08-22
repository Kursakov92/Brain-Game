import readlineSync from 'readline-sync';

function isEven(n) {
  return n % 2 === 0;
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export default function evenGame() {
  const number = randomNumber(1, 99);
  console.log(`Answer "yes" if the number is even, otherwise answer "no" - ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correct = isEven(number) ? 'yes' : 'no';
  return answer === correct;
}
