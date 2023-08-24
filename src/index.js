import greeting from './greeting.js';

export default function playGame(game) {
  for (let i = 0; i < 3; i += 1) {
    const result = game();
    const userName = greeting();
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
