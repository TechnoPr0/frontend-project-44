#!/usr/bin/env node

import readlineSync from 'readline-sync';
import whatIsYourName from '../src/cli.js';

const name = whatIsYourName();
const minNumber = 1;
const maxNumber = 26;
const listSigns = ['+', '-', '*'];
let i = 0;

console.log('What is the result of the expression?');
for (i; i < 3; i += 1) {
  const firstNumber = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  const secondNumber = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
  const sign = listSigns[Math.floor(Math.random() * (3 - 0)) + 0];
  let answer;
  console.log(`Question: ${firstNumber}${sign}${secondNumber}`);
  switch (sign) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  const answerUser = readlineSync.question('Your answer: ');
  if (Number(answerUser) === answer) {
    console.log('Correct!');
  } else {
    console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
if (i === 3) {
  console.log(`Congratulations, ${name}!`);
}
