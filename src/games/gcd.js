import { randomNumb } from '../index.js';

const question = 'Find the greatest common divisor of given numbers.';
const gcdLogic = () => {
  const minNumber = 1;
  const maxNumber = 101;
  let smallerNumber;
  let largestNumber;
  const firstNumber = randomNumb(minNumber, maxNumber);
  const secondNumber = randomNumb(minNumber, maxNumber);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  if (firstNumber < secondNumber) {
    smallerNumber = firstNumber;
    largestNumber = secondNumber;
  } else {
    smallerNumber = secondNumber;
    largestNumber = firstNumber;
  }
  for (let i = smallerNumber; i > 0; i -= 1) {
    if (largestNumber % i === 0 && smallerNumber % i === 0) {
      return String(i);
    }
  }
  return '1';
};

export { gcdLogic, question };
