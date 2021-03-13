import {generateData} from './data';

let cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const dataSet = generateData();

const dataListFragment = document.createDocumentFragment();

dataSet.forEach(({author, offer/*, location*/}) => {
  const dataElement = cardTemplate.cloneNode(true);

  dataElement.querySelector('.popup__avatar').src = author.avatar;
  dataElement.querySelector('.popup__title').textContent = offer.title;
  dataElement.querySelector('.popup__text--address').textContent = offer.address;
  dataElement.querySelector('.popup__text--price').textContent = `${offer.price} P/за ночь`;
  dataElement.querySelector('.popup__type').textContent = typeHousing[offer.type];
  dataElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  dataElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkIn}, выезд до ${offer.checkOut}`;

  if (offer.feauture.lenght > 0){
    dataElement.querySelector('.popup__features').textContent = ' ';
    let listFeautures = document.querySelector('.popup__features');
    offer.features.forEach(function(element) {
      let elementFeauture = document.createElement('li');
      elementFeauture.classList.add(`popup__feature--${element}`);
	    listFeautures.appendChild(elementFeauture);
    })
  } else {
    dataElement.querySelector('.popup__features').remove();
  }

  dataElement.querySelector('.popup__description').textContent = offer.description;

  if (offer.photo.lenght > 0){
    dataElement.querySelector('.popup__photo').src = offer.photo;
  } else {
    dataElement.querySelector('.popup__photo').remove();
  }

  dataListFragment.appendChild(dataElement);
})

let typeHousing = new Map([
  ['flat', 'Квартира'],
  ['bungalo', 'Бунгало'],
  ['house', 'Дом'],
  ['palace', 'Дворец']
]);

//export {dataSet};
