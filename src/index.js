import readlineSync from 'readline-sync';
import sayHello from '../bin/cli.js';

const roundsCount = 3;

const startGame = (gameRule, askQuestion) => {
  const userName = sayHello();
  console.log(gameRule);
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = askQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
