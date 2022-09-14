import startGame from '../src/index.js';
import { getRandomNumber } from '../src/utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const finalGreatestDevisor = (firstNum, secondNum) => {
  if (firstNum === 0) {
    return secondNum;
  }
  return finalGreatestDevisor(secondNum % firstNum, firstNum);
};

const greatestCommonDevisor = () => {
  const firstNum = getRandomNumber(25, 45);
  const secondNum = getRandomNumber(1, 50);
  const question = `${firstNum} ${secondNum}`;

  const correctAnswer = String(finalGreatestDevisor(firstNum, secondNum));
  return [question, correctAnswer];
};
startGame(gameRule, greatestCommonDevisor);
