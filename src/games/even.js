import { randomNumb } from '../index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';
const evenLogic = () => {
  const minNumber = 0;
  const maxNumber = 101;
  const randomNumber = randomNumb(minNumber, maxNumber);
  console.log(`Question: ${randomNumber}`);
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return correctAnswer;
};

export { evenLogic, question };
