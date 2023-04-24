import { randomNumb } from '../index.js';

const question = 'What number is missing in the progression?';
const progressionLogic = () => {
  const lengthArray = 10;
  const randomStart = randomNumb(1, 100);
  const randomStep = randomNumb(1, 15);
  const arrayNumb = [];
  let tempNumb = randomStart;
  for (let i = 0; i < lengthArray; i += 1) {
    arrayNumb.push(tempNumb);
    tempNumb += randomStep;
  }
  const randomIndex = randomNumb(0, lengthArray);
  const answer = arrayNumb[randomIndex];
  arrayNumb[randomIndex] = '..';
  console.log(arrayNumb.join(' '));
  return answer;
};

export { progressionLogic, question };
