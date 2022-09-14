// import readlineSync from 'readline-sync';
import startGame from '../src/index.js';
import { getRandomNumber, isEven } from '../src/utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const askQuestion = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

startGame(gameRule, askQuestion);
