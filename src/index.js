#!/usr/bin/env node
import readlineSync from 'readline-sync';
import whatIsYourName from './cli.js';

const randomNumb = (minNumber, maxNumber) => {
  const number = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  return number;
};

const game = (gameLogic, question) => {
  const name = whatIsYourName();
  let i = 0;
  console.log(question);
  for (i; i < 3; i += 1) {
    const correctAnswer = String(gameLogic());
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export { randomNumb, game };
