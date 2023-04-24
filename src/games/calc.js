#!/usr/bin/env node

import { randomNumb } from '../index.js';

const question = 'What is the result of the expression?';
const calcLogic = () => {
  const minNumber = 1;
  const maxNumber = 26;
  const listSigns = ['+', '-', '*'];
  const firstNumber = randomNumb(minNumber, maxNumber);
  const secondNumber = randomNumb(minNumber, maxNumber);
  const sign = listSigns[randomNumb(0, 3)];
  let correctAnswer;

  console.log(`Question: ${firstNumber} ${sign} ${secondNumber}`);

  switch (sign) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return String(correctAnswer);
};

export { calcLogic, question };
