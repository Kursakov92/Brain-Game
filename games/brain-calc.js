import readlineSync from 'readline-sync';

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function calc() {
  let correctAnswer;
  const operator = ['+', '-', '*'];
  const number1 = randomNumber(1, 99);
  const number2 = randomNumber(1, 99);
  const randomOperator = randomNumber(0, 3);
  console.log('What is the result of the expression?');
  const answer = readlineSync.question(`Question: ${number1} ${operator[randomOperator]} ${number2}  `);
  console.log(`Your answer: ${answer}`);
  switch (randomOperator) {
    case 0:
      correctAnswer = String(number1 + number2);
      break;
    case 1:
      correctAnswer = String(number1 - number2);
      break;
    case 2:
      correctAnswer = String(number1 * number2);
      break;
    default:
  }
  return answer === correctAnswer;
}

export default function brainCalc() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  
  for (let i = 0; i < 3; i += 1) {
    const result = calc();
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
}
