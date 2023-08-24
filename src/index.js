export default function playGame(game, name, gameVariant = 0) {
  for (let i = 0; i < 3; i += 1) {
    const { isCorrect, answer, correctAnswer } = game();
    const userName = name;
    if (isCorrect) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}`);
      }
    }
    if (!isCorrect) {
      const variant = gameVariant === 0 ? `Let's try again ${userName}!` : `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again ${userName}!`;
      console.log(variant);
      break;
    }
  }
}
