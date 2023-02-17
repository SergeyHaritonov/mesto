let profileEditButton = document.querySelector('.profile__edit-button');

let popUp = document.querySelector('.popup');

let popupCloseButton = document.querySelector('.popup__close-button');

function openPopup () {
  popUp.classList.add('popup_opened');
}

function closePopup () {
  popUp.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

let userName = 'Жак-Ив Кусто';

let userJob = 'Исследователь океана';

let userNameElement = document.querySelector('.profile__title');
userNameElement.textContent = userName;

let userJobElement = document.querySelector('.profile__subtitle');
userJobElement.textContent = userJob;

let popupInputName = document.querySelector('.popup__input_type_name');
popupInputName.value = userName;

let popupInputJob = document.querySelector('.popup__input_type_job');
popupInputJob.value = userJob;

let popupSaveButton = document.querySelector('.popup__container-button');

popupSaveButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  userNameElement.textContent = popupInputName.value;
  userJobElement.textContent = popupInputJob.value;
  userName = popupInputName.value;
  userJob = popupInputJob.value;
  closePopup();
})

popupCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupInputName.value = userName;
  popupInputJob.value = userJob;
  closePopup();
})