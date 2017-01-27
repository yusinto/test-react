import Constants from '../constant';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const generateRandom = () => {
  return {
    type: Constants.GENERATE_RANDOM,
    data: getRandomInt(1, 100)
  }
};