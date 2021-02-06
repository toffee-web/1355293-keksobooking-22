function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(0, 101);

function getRandomFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}
getRandomFloat(0, 101);
