#!/usr/bin/env node

import readlineSync from 'readline-sync';
import whatIsYourName from '../src/cli.js';

whatIsYourName();

const minNumber = 0;
const maxNumber = 101;
let i = 0;

console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (i; i < 3; i += 1) {
  const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  console.log(`Question: ${randomNumber}`);
  const enteredNumber = readlineSync.question('Your answer: ');
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  if (enteredNumber === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${enteredNumber}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    break;
  }
}

if (i === 3) {
  console.log('Congratulations, Sam!');
}
