const page = document.querySelector('.page');
const content = page.querySelector('.content');
const profile = content.querySelector('.profile');
const elements = content.querySelector('.elements');//Блок карточек мест

const cardElement = elements.querySelectorAll('.element');//Карточка мест

const elemCont = [
    {
        link: './image/Водопад.jpg',
        name: 'Водопад',
    },
    {
        link: './image/Донбай.jpg',
        name: 'Донбай',
    },
    {
        link: './image/Зебра.jpg',
        name: 'Африка',
    },
    {
        link: './image/Паруснаялодка.jpg',
        name: 'Порусная лодка',
    },
    {
        link: './image/Северноесияние.jpg',
        name: 'Северное сияние',
    },
    {
        link: './image/Бамбуковыйлес.jpg',
        name: 'Бамбуковый лес',
    },
    {
        link: '',
        name: '',
    },
    {
        link: '',
        name: '',
    },
    {
        link: '',
        name: '',
    },
];
/*
const newElementName = elemCont.map(function (el) {
    return el.name;
});
const newElementLink = elemCont.map(function (el) {
    return el.link;
});
*/
//console.log(userCard);

//console.log(onlineUser);
//console.log(elemCont.firstElementChild);


const titleElement = elements.querySelectorAll('.element__title');//Название карточки мест
const elementImg = elements.querySelectorAll('.element__group');//Фото карточки

const profileAddButton = content.querySelector('.profile__add-button');//Кнопка добавления элемента(карточки)
const userTitl = elements.querySelector('.element__title');

elemCont.forEach(function (element) {
const onlineUser = content.querySelector('.elements');
const cardTemplate = content.querySelector('#element').content;
const userCard = cardTemplate.querySelector('.element').cloneNode(true);
    userCard.querySelector('.element__title').textContent = element.name;
    userCard.querySelector('.element__group').src = element.link;


    onlineUser.prepend(userCard);
    //console.log(onlineUser);
});

const onlineUser = content.querySelector('.elements');
const cardTemplate = content.querySelector('#element').content;
const userCard = cardTemplate.querySelector('.element').cloneNode(true);
const cardArticle = onlineUser.querySelector('.element');
const likeButt = onlineUser.querySelectorAll('.element__like');
console.log(likeButt);

const like = likeButt.forEach((likeButt) => {
    likeButt.addEventListener('click', () => {
        likeButt.classList.toggle('element__like_active');
    });
    return likeButt;
});
/*
const contentElement = elements.querySelectorAll('.element__card');//Подвал карточки
console.log(contentElement);
*/

const submitForm = content.querySelector('.popup__submit-buttom');
const profileButton = content.querySelector('.profile__edit-button');

const popupElement = content.querySelector('.popup');//Попап
const popupNewItem = content.querySelector('.popup__item-conteiner');//Форма добавления карточек
const profileForm = content.querySelector('.popup__container');// Форма редактироания профиля

const popupAddCard = content.querySelector('.popup__add-card');
const popupEditProfile = content.querySelector('.popup__edit-profile');

// Форма редактирования профиля
const form = content.querySelector('form');
let userName = profile.querySelector('.profile__info-name');
let userText = profile.querySelector('.profile__info-text');

let nameInput = profileForm.querySelector('.popup__input_type_neim');
let jobInput = profileForm.querySelector('.popup__input_type_profil');

// Обе кнопки закрытия форм
const closeFormItem = content.querySelector('.popup__close-item');
const closeForm = content.querySelector('.popup__close-icon');

const openPopup = (popupElement) => {
    popupElement.classList.add('popup_opened');
}

const closePopup = () => {
    popupAddCard.classList.remove('popup_opened');
    popupEditProfile.classList.remove('popup_opened');
}
closeForm.addEventListener('click', closePopup);
closeFormItem.addEventListener('click', closePopup);


const clickBut = () => {
    openPopup(popupEditProfile)
    nameInput.value = `${userName.textContent}`;
    jobInput.value = `${userText.textContent}`;
}
profileButton.addEventListener('click', clickBut);

function clickAddButton() {
    openPopup(popupAddCard);
}
profileAddButton.addEventListener('click', clickAddButton);

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = `${nameInput.value}`;
    userText.textContent = `${jobInput.value}`;
    popupElement.classList.remove('popup_opened');
}
form.addEventListener('submit', handleFormSubmit);


/*
console.log(likeElement.parentElement);//Ищем родителя
console.log(contentElement.children);//Ищем детей
*/