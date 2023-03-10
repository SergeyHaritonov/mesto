const template = document.querySelector('.cardTemplate').content;

const profileEditButton = document.querySelector('.profile__edit-button');

const popupEditProfile = document.querySelector('.popup_type_editProfile');

const popupCloseButtonEditProfile = document.querySelector('.popup__close-button_type_editProfile');

const userNameElement = document.querySelector('.profile__title');

const userJobElement = document.querySelector('.profile__subtitle');

const profileEditFormElement = document.querySelector('.popup__container-form_editProfile');

const profileEditNameInput = document.querySelector('.popup__input_type_name');

const profileEditJobInput = document.querySelector('.popup__input_type_job');

const elementsSection = document.querySelector('.elements');

const fullImage = document.querySelector('.popup__fullImage');

const fullImageFigcaption = document.querySelector('.popup__figcaption');

const popupFullImage = document.querySelector('.popup_type_fullImage')

const popupCloseButtonFullImage = document.querySelector('.popup__close-button_type_fullImage');

const cardAddNameInput = document.querySelector('.popup__input_type_place');

const cardAddLinkInput = document.querySelector('.popup__input_type_url');

const handleAddUserCardSubmit = document.querySelector('.popup__container-form_type_addCard');

const popupCloseButtonAddCard = document.querySelector('.popup__close-button_type_addCard');

const profileAddButton = document.querySelector('.profile__add-button');

const popUpAddCard = document.querySelector('.popup_type_addCard');

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

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleProfileEditButtonClick() {
  openPopup(popupEditProfile);
  profileEditNameInput.value = userNameElement.textContent;
  profileEditJobInput.value = userJobElement.textContent;
}

function handleEditProfileFormSubmit (evt) {
    evt.preventDefault(); 
    userNameElement.textContent = profileEditNameInput.value;
    userJobElement.textContent = profileEditJobInput.value;
    closePopup(popupEditProfile);
}

function createCard(card) {
  const newCard = template.cloneNode(true);
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
    openPopup(popupFullImage);
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
    name: cardAddNameInput.value,
    link: cardAddLinkInput.value
  }));
  closePopup(popUpAddCard);
}

function handleDeleteButtonClick(evt) {
  evt.target.closest('.element').remove();
}

function handleLikeButtonClick(evt) {
  evt.target.classList.toggle('element__like-button_active');
}

function handleProfileAddButton() {
  handleAddUserCardSubmit.reset();
  openPopup(popUpAddCard);
}

profileAddButton.addEventListener('click', handleProfileAddButton);

popupCloseButtonAddCard.addEventListener('click', function() {
  closePopup(popUpAddCard);
});

profileEditFormElement.addEventListener('submit', handleEditProfileFormSubmit);

profileEditButton.addEventListener('click', handleProfileEditButtonClick);

popupCloseButtonEditProfile.addEventListener('click', function() {
  closePopup(popupEditProfile);
});

handleAddUserCardSubmit.addEventListener('submit', handleAddUserCard);

popupCloseButtonFullImage.addEventListener('click', function() {
  closePopup(popupFullImage);
});