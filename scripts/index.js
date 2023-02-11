const page = document.querySelector('.page');
const content = page.querySelector('.content');
const profile = content.querySelector('.profile');

const popupElement = content.querySelector('.popup');//Попап
const popupNewItem = content.querySelector('.popup__item-conteiner');//Форма добавления карточек
const profileForm = content.querySelector('.popup__container');// Форма редактироания профиля

//const elements = content.querySelector('.elements');//Блок карточек мест
//const cardElement = elements.querySelectorAll('.element');

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
];

//const titleElement = elements.querySelectorAll('.element__title');//Название карточки мест
//const elementImg = elements.querySelectorAll('.element__group');//Фото карточки

const profileAddButton = content.querySelector('.profile__add-button');//Кнопка добавления карточки
const cardSec = content.querySelector('.elements');//нов
const cardTemplate = content.querySelector('#element');
console.log();

const creatTask = elemCont.forEach((elem) => {
    const onlineUser = cardTemplate.content.querySelector('.element').cloneNode(true);

    onlineUser.querySelector('.element__title').textContent = elem.name;
    onlineUser.querySelector('.element__group').src = elem.link;
    const likeButt = onlineUser.querySelectorAll('.element__like');
    const buttomDelet = onlineUser.querySelectorAll('.element__delet');

    const like = likeButt.forEach((likeButt) => {
        likeButt.addEventListener('click', () => {
            likeButt.classList.toggle('element__like_active');
        });
    });

    const deletCard = buttomDelet.forEach((buttomDelet) => {
        buttomDelet.addEventListener('click', () => {
            const cardArticle = buttomDelet.closest('.element');
            cardArticle.remove();
        });
    });

    cardSec.prepend(onlineUser);
    //return onlineUser;
});



//console.log(contentElement);
const submitForm = content.querySelector('.popup__submit-buttom');
const profileButton = content.querySelector('.profile__edit-button');
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