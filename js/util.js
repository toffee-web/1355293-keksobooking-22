const getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomFloat = function(min, max, symbol) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(symbol));
}

const getRandomElement = function (elements) {
  return elements[Math.floor(Math.random() * elements.length)];
};

const shuffleArray = function(array) {
  const arrayCopy = array.slice();
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arrayCopy[i];
    arrayCopy[i] = arrayCopy[j];
    arrayCopy[j] = temp;
  }
  return arrayCopy;
}

export {getRandomInt, getRandomFloat, getRandomElement, shuffleArray};
