function checkAnswer(isCorrect, answer, round, name, correctAnswer) {
  if (isCorrect) {
    console.log('Correct!');
  }
  if (round === 2) {
    console.log(`Congratulations, ${name}!`);
  }
  if (!isCorrect) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
  }
}

export default function playGame(game, name) {
  for (let i = 0; i < 3; i += 1) {
    const { isCorrect, answer, correctAnswer } = game();
    const userName = name;
    checkAnswer(isCorrect, answer, i, userName, correctAnswer);
    if (!isCorrect) break;
  }
}
