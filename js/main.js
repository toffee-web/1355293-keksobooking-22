const getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(0, 101);

const getRandomFloat = function(min, max, symbol) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(symbol));
}
getRandomFloat(0, 101, 1);
