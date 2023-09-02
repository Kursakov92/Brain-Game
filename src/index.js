function checkAnswer({ isCorrect, answer, correctAnswer }, round, name) {
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
    const result = game();
    const userName = name;
    checkAnswer(result, i, userName);
    if (!result.isCorrect) break;
  }
}
