let profileEditButton = document.querySelector('.profile__edit-button');

let popUp = document.querySelector('.popup');

let popupCloseButton = document.querySelector('.popup__close-button');

let userNameElement = document.querySelector('.profile__title');

let userJobElement = document.querySelector('.profile__subtitle');

let formElement = document.querySelector('.popup__container-form');

let nameInput = document.querySelector('.popup__input_type_name');

let jobInput = document.querySelector('.popup__input_type_job');

function openPopup () {
  popUp.classList.add('popup_opened');
  nameInput.value = userNameElement.textContent;
  jobInput.value = userJobElement.textContent;
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

formElement.addEventListener('submit', handleFormSubmit);

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);