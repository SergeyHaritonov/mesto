let profileEditButton = document.querySelector('.profile__edit-button');

let popUp = document.querySelector('.popup');

let popupCloseButton = document.querySelector('.popup__close-button');

let userNameElement = document.querySelector('.profile__title');

let userJobElement = document.querySelector('.profile__subtitle');

let formElement = document.querySelector('.popup__container-form');

let nameInput = document.querySelector('.popup__input_type_name');

let jobInput = document.querySelector('.popup__input_type_job');

const elementsSection = document.querySelector('.elements');

const fullImage = document.querySelector('.popup__fullImage');

const fullImageFigcaption = document.querySelector('.popup__figcaption');

const popupFullImage = document.querySelector('.popup_type_fullImage')

const popupCloseButtonFullImage = document.querySelector('.popup__close-button_type_fullImage');

const addCardNameInput = document.querySelector('.popup__input_type_place');

const addCardLinkInput = document.querySelector('.popup__input_type_url');

const handleAddUserCardSubmit = document.querySelector('.popup__container-form_type_addCard');

let popupCloseButtonAddCard = document.querySelector('.popup__close-button_type_addCard');

let profileAddButton = document.querySelector('.profile__add-button');

let popUpAddCard = document.querySelector('.popup_type_addCard');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


function openPopup () {
  popUp.classList.add('popup_opened');
  nameInput.value = userNameElement.textContent;
  jobInput.value = userJobElement.textContent;
}

function closePopup () {
  popUp.classList.remove('popup_opened');
}

function closePopup () {
  popUp.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    userNameElement.textContent = nameInput.value;
    userJobElement.textContent = jobInput.value;
    closePopup();
}

function createCard(card) {
  const newCard = document.querySelector('.cardTemplate').content.cloneNode(true);
  const cardTitle = newCard.querySelector('.element__title');
  cardTitle.textContent = card.name;
  const cardImage = newCard.querySelector('.element__image');
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', `Фотография, на которой ${card.name}`);
  const deleteButton = newCard.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', handleDeleteButtonClick);
  const likeButton = newCard.querySelector('.element__like-button');
  likeButton.addEventListener('click', handleLikeButtonClick);
  cardImage.addEventListener('click', function() {
    fullImage.setAttribute('src', card.link);
    fullImage.setAttribute('alt', `Фотография, на которой ${card.name}`);
    fullImageFigcaption.textContent = card.name;
    openPopupFullImage();
  });
  return newCard;
}

function renderCard(card) {
  elementsSection.prepend(createCard(card));
}

initialCards.forEach(renderCard);

function handleAddUserCard(evt) {
  evt.preventDefault();
  (renderCard({
    name: addCardNameInput.value,
    link: addCardLinkInput.value
  }));
  closePopupAddCard();
}

function openPopupFullImage () {
  popupFullImage.classList.add('popup_opened');
}

function closePopupFullImage () {
  popupFullImage.classList.remove('popup_opened');
}

function handleDeleteButtonClick(evt) {
  evt.target.closest('.element').remove();
}

function handleLikeButtonClick(evt) {
  evt.target.classList.toggle('element__like-button_active');
}

function openPopupAddCard () {
  addCardNameInput.value = '';
  addCardLinkInput.value = '';
  popUpAddCard.classList.add('popup_opened');
}

function closePopupAddCard () {
  popUpAddCard.classList.remove('popup_opened');
}


profileAddButton.addEventListener('click', openPopupAddCard);

popupCloseButtonAddCard.addEventListener('click', closePopupAddCard);

formElement.addEventListener('submit', handleFormSubmit);

profileEditButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

handleAddUserCardSubmit.addEventListener('submit', handleAddUserCard);

popupCloseButtonFullImage.addEventListener('click', closePopupFullImage);