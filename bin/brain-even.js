import readlineSync from 'readline-sync';
import Hello from './cli.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const startGame = () => {
  const userName = Hello();
  console.log(gameRule);
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const randomNumber = getRandomNumber(1, 300);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question();
    console.log(`Your answer: ${userAnswer}`);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    console.log('Correct!');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default getRandomNumber;
startGame();
