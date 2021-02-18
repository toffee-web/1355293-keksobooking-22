const AUTHOR_AVATAR_MIN = 1;
const AUTHOR_AVATAR_MAX = 8;
const TITLE_PROPOSAL = 'Описание предложения';
const ADDRESS_X = 100;
const ADDRESS_Y = 100;
const PRICE_MAX = 100000;
const TYPE_APARTMENTS = ['palace', 'flat', 'house', 'bungalow'];
const NUMBER_OF_ROOMS_MIN = 1;
const NUMBER_OF_ROOMS_MAX = 3;
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = 'Уютный номер с большой двухспальной кроватью, системой кондиционирования и отопления, отличным видом из окна. К вашим услугам телевизор, сейф. ';
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const LOCATION_X_MIN = 35.65000;
const LOCATION_X_MAX = 35.70000;
const LOCATION_Y_MIN = 139.70000;
const LOCATION_Y_MAX = 139.80000;
const GENERATED_OBJECTS = 10;

const createAd = () => {
  const locationX = getRandomFloat(LOCATION_X_MIN, LOCATION_X_MAX, 5);
  const locationY = getRandomFloat(LOCATION_Y_MIN, LOCATION_Y_MAX, 5);
  const room = getRandomInt(NUMBER_OF_ROOMS_MIN, NUMBER_OF_ROOMS_MAX);
  const avatar = getRandomInt(AUTHOR_AVATAR_MIN, AUTHOR_AVATAR_MAX);

  return {
    price: getRandomElement(PRICE_MAX),
    typeApartments: getRandomElement(TYPE_APARTMENTS),
    checkIn: getRandomElement(CHECKIN),
    checkOut: getRandomElement(CHECKOUT),
    feauture: getRandomElement(FEATURES),
    photo: getRandomElement(PHOTOS)
  }
}

const getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//getRandomInt(0, 101);

const getRandomFloat = function(min, max, symbol) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(symbol));
}
//getRandomFloat(0, 101, 1);

Array.prototype.getRandomElement = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const selectedCreteria = new Array(GENERATED_OBJECTS).fill(null).map(() => createAd());
