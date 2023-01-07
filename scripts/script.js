
const page = document.querySelector('.page');
const content = page.querySelector('.content');
const popupElement = content.querySelector('.popup');
const profile = content.querySelector('.profile');

const elements = content.querySelector('.elements');
const cardElement = elements.querySelectorAll('.element');
const elementImg = elements.querySelectorAll('.element__group');
const contentElement = elements.querySelectorAll('.element__card');
let titlElement = elements.querySelectorAll('.element__titl');

// Пока я не нашел, как повесить обработчик событий на все лайки
let likeElement = elements.querySelector('.element__like');

let submitForm = content.querySelector('.submit-buttom');
let profileButton = content.querySelector('.profile__edit-button');

function clickButton() {
    popupElement.classList.add('popup_opened');
}

profileButton.addEventListener('click', clickButton);

const closeForm = content.querySelector('.close-icon');
function formClose() {
    popupElement.classList.remove('popup_opened');
}

closeForm.addEventListener('click', formClose);

const form = content.querySelector('form');
let userName = profile.querySelector('.profile-info__name');
let userText = profile.querySelector('.profile-info__text');
let nameInput = popupElement.querySelector('.popup__neim');
let jobInput = popupElement.querySelector('.popup__profil');
function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = `${nameInput.value}`;
    userText.textContent = `${jobInput.value}`;
}

form.addEventListener('submit', handleFormSubmit);
// Пока работает на первой кнопке
function clickLike() {
    likeElement.classList.toggle('element__like_activ');
}   
    likeElement.addEventListener('click', clickLike);
//Надо двигаться дальше
//С Новым годом и Рождеством. 
//Здоровья Вам крепкого!!!
