#!/usr/bin/env node

import startGame from '../src/index.js';
import { getRandomNumber } from '../src/utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }
  return true;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isShowingNumberPrime = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

startGame(gameRule, isShowingNumberPrime);
