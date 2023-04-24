import { randomNumb } from '../index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const primeLogic = () => {
  const randomNumber = randomNumb(2, 101);
  console.log(`Question: ${randomNumber}`);
  for (let i = 2; i < (randomNumber / 2); i += 1) {
    if (randomNumber % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export { primeLogic, question };
