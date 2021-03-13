import {getRandomInt, getRandomFloat, getRandomElement, shuffleArray} from './util.js'

const AUTHOR_AVATAR_MIN = 1;
const AUTHOR_AVATAR_MAX = 8;
const TITLE_PROPOSAL = 'Описание предложения';
const ADDRESS_X = 100;
const ADDRESS_Y = 300;
const PRICE_MAX = 100000;
const TYPE_APARTMENTS = ['palace', 'flat', 'house', 'bungalow'];
const NUMBER_OF_ROOMS_MIN = 1;
const NUMBER_OF_ROOMS_MAX = 3;
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = 'Уютный номер с большой двухспальной кроватью, системой кондиционирования и отопления, отличным видом из окна. К вашим услугам телевизор, сейф. ';
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const LOCATION_X_MIN = 35.65;
const LOCATION_X_MAX = 35.7;
const LOCATION_Y_MIN = 139.7;
const LOCATION_Y_MAX = 139.8;
const GENERATED_OBJECTS = 10;

const createAd = function() {
  const avatar = getRandomInt(AUTHOR_AVATAR_MIN, AUTHOR_AVATAR_MAX);
  const coordinatesAddressX = getRandomInt(1, ADDRESS_X);
  const coordinatesAddressY = getRandomInt(1, ADDRESS_Y);
  const locationX = getRandomFloat(LOCATION_X_MIN, LOCATION_X_MAX, 5);
  const locationY = getRandomFloat(LOCATION_Y_MIN, LOCATION_Y_MAX, 5);

  return {
    author: {
      avatar: 'img/avatars/user0' + avatar + '.png',
    },
    offer: {
      title: TITLE_PROPOSAL,
      address: {
        x: coordinatesAddressX,
        y: coordinatesAddressY,
      },
      price: getRandomInt(100, PRICE_MAX),
      type: getRandomElement(TYPE_APARTMENTS),
      rooms: getRandomInt(NUMBER_OF_ROOMS_MIN, NUMBER_OF_ROOMS_MAX),
      guests: getRandomInt(1, 8),
      checkIn: getRandomElement(CHECKIN),
      checkOut: getRandomElement(CHECKOUT),
      feauture: shuffleArray(FEATURES).slice(2),
      description: DESCRIPTION,
      photo: shuffleArray(PHOTOS).slice(2),
    },
    location: {
      x: locationX,
      y: locationY,
    },
  }
}

const generateData = function () {
  return new Array(GENERATED_OBJECTS).fill(null).map(() => createAd());
}

//generateData();

export {generateData, createAd};
