import readlineSync from 'readline-sync';
import Hello from './cli.js';
//expalain rules to gamer
const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
// //function which check if the number is even 
const isEven = (number) => number % 2 === 0;
//const random number 
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const  startGame  = () => {
  const userName = Hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".' );
  const roundsCount = 3;
  
  
  for (let i = 1; i <= roundsCount; i += 1) {
    let randomNumber = getRandomNumber(1,300);
    console.log(`Question: ${randomNumber}`);
    const userAnswer =  readlineSync.question();
    console.log(`Your answer: ${userAnswer}`); 
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    
    // not correct
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      // return;
    }

    // correct
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

startGame();



