#!/usr/bin/env node

import startGame from '../src/index.js';
import { getRandomNumber } from '../src/utils.js';

const gameRule = 'What number is missing in the progression?';

const makeProgression = (firstNumber, step, length) => {
  const result = [];
  result[0] = firstNumber;
  for (let i = 2; i <= length; i += 1) {
    result[i - 1] = firstNumber + (i - 1) * step;
  }
  return result;
};
const makeProgressionWithMissingElement = () => {
  const length = getRandomNumber(6, 15);
  const firstNumber = getRandomNumber(1, 40);
  const step = getRandomNumber(1, 5);
  const progression = makeProgression(firstNumber, step, length);
  const hiddenNumber = getRandomNumber(1, 3);
  const correctAnswer = String(firstNumber + hiddenNumber * step);
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
startGame(gameRule, makeProgressionWithMissingElement);
