const page = document.querySelector('.page');
const content = page.querySelector('.content');
const popupElement = content.querySelector('.popup');
const profile = content.querySelector('.profile');
const elements = content.querySelector('.elements');
const cardElement = elements.querySelectorAll('.element');
const elementImg = elements.querySelectorAll('.element__group');
const contentElement = elements.querySelectorAll('.element__card');
let titleElement = elements.querySelectorAll('.element__title');

// Пока я не нашел, как повесить обработчик событий на все лайки
let likeElement = elements.querySelector('.element__like');

let submitForm = content.querySelector('.popup__submit-buttom');
let profileButton = content.querySelector('.profile__edit-button');

function clickButton() {
    let userText = profile.querySelector('.profile__info-text');
    let nameInput = popupElement.querySelector('.popup__input_type_neim');
    popupElement.classList.add('popup_opened');
    nameInput.value = `${userName.textContent}`;
    jobInput.value = `${userText.textContent}`;
}

profileButton.addEventListener('click', clickButton);

const closeForm = content.querySelector('.popup__close-icon');
function formClose() {
    popupElement.classList.remove('popup_opened');
}

closeForm.addEventListener('click', formClose);

const form = content.querySelector('form');
let userName = profile.querySelector('.profile__info-name');
let userText = profile.querySelector('.profile__info-text');
let nameInput = popupElement.querySelector('.popup__input_type_neim');
let jobInput = popupElement.querySelector('.popup__input_type_profil');
function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = `${nameInput.value}`;
    userText.textContent = `${jobInput.value}`;
    popupElement.classList.remove('popup_opened');
}

form.addEventListener('submit', handleFormSubmit);
// Пока работает на первой кнопке
function clickLike() {
    likeElement.classList.toggle('element__like_active');
}
likeElement.addEventListener('click', clickLike);