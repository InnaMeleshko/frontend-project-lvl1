import startGame from '../src/index.js';
import { getRandomNumber } from '../src/utils.js';

const gameRule = 'What is the result of the expression?';


const brainCalc = (firstNum, secondNum, finalRandomSymbol) => {
  switch (finalRandomSymbol) {
    case '-':
      return (firstNum - secondNum);
    case '+':
      return (firstNum + secondNum);
    case '*':
      return (firstNum * secondNum);
    default:
      return null;
  }
};

const gameEngine = () => {
  const symbols = ['+', '-', '*'];
  const firstNum = getRandomNumber(1, 10);
  const secondNum = getRandomNumber(1, 10);
  const finalRandomSymbol = symbols[getRandomNumber(0, symbols.length - 1)];
  const correctAnswer = String(brainCalc(firstNum, secondNum, finalRandomSymbol));
  const question = `${firstNum} ${finalRandomSymbol} ${secondNum}`;
  return [question, correctAnswer];
};

startGame(gameRule, gameEngine);
