const page = document.querySelector('.page');
const content = page.querySelector('.content');
const profile = content.querySelector('.profile');

const elemCont = [
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

const cardOpenImg = content.querySelector('.popup__img-card');
const cardOpenName = content.querySelector('.popup__element-name');
const openElemCont = content.querySelector('.popup__element-conteiner');
const openElementPopup = content.querySelector('.popup__element');

const profileAddButton = content.querySelector('.profile__add-button');//Кнопка добавления карточки
const elements = content.querySelector('.elements');//Блок карточек мест
const cardTemplate = content.querySelector('#element-template');

const creatCard = (link, name) => {
    const elementCard = cardTemplate.content.querySelector('.element').cloneNode(true);
    elementCard.querySelector('.element__title').textContent = name;
    elementCard.querySelector('.element__group').src = link;

    const likeButt = elementCard.querySelector('.element__like');
    likeButt.addEventListener('click', () => {
        likeButt.classList.toggle('element__like_active');
    });

    const buttomDelet = elementCard.querySelector('.element__delet');
    buttomDelet.addEventListener('click', () => {
        const cardArticle = buttomDelet.closest('.element');
        cardArticle.remove();
    });

    const elemImg = elementCard.querySelector('.element__group');
    const elemTitle = elementCard.querySelector('.element__title');

    elemImg.addEventListener('click', () => {
        const elemImg = elementCard.querySelector('.element__group');
        cardOpenImg.setAttribute('src', elemImg.getAttribute('src'));
        cardOpenImg.setAttribute('alt', elemTitle.textContent);
        cardOpenName.textContent = elemTitle.textContent;
        openPopup(openElementPopup);
    })

    elements.prepend(elementCard);
    return elementCard;
};

const creatArrayCard = elemCont.forEach((elem) => {
    creatCard(elem.link, elem.name);
    return elem;
});

const renderCard = (link, name) => {
    elements.prepend(creatCard(link, name));
};

const profileForm = content.querySelector('.popup__container');// Форма редактироания профиля
const submitForm = content.querySelector('.popup__submit-buttom');
const profileButton = content.querySelector('.profile__edit-button');
const popupAddCard = content.querySelector('.popup__add_card');
const popupEditProfile = content.querySelector('.popup__edit_profile');
const popupElement = content.querySelector('.popup__element');

// Форма редактирования профиля
const form = content.querySelector('.popup__form');
const userName = profile.querySelector('.profile__info-name');
const userText = profile.querySelector('.profile__info-text');

const nameInput = profileForm.querySelector('.popup__input_type_neim');
const jobInput = profileForm.querySelector('.popup__input_type_profil');

// Обе кнопки закрытия форм
const closeForm = content.querySelector('.popup__close');
const closeFormItem = popupAddCard.querySelector('.popup__close_item');
const closeElem = content.querySelector('.popup__close_elem');

const openPopup = (popupElement) => {
    popupElement.classList.toggle('popup_opened');
}

const closePopup = () => {
    popupAddCard.classList.remove('popup_opened');
    popupEditProfile.classList.remove('popup_opened');
    popupElement.classList.remove('popup_opened');
}

closeFormItem.addEventListener('click', closePopup);
closeForm.addEventListener('click', closePopup);
closeElem.addEventListener('click', closePopup);

const clickBut = () => {
    openPopup(popupEditProfile)
    nameInput.value = `${userName.textContent}`;
    jobInput.value = `${userText.textContent}`;
}
profileButton.addEventListener('click', clickBut);

function clickAddButton() {
    openPopup(popupAddCard);
};
profileAddButton.addEventListener('click', clickAddButton);

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = `${nameInput.value}`;
    userText.textContent = `${jobInput.value}`;
    popupEditProfile.classList.remove('popup_opened');
}
form.addEventListener('submit', handleFormSubmit);

const formCard = content.querySelector('.popup__form_item');
const inputTitle = popupAddCard.querySelector('.popup__input_item_neim');//Название карточки мест
const inputImg = popupAddCard.querySelector('.popup__input_item_profil');//Фото карточки

function handleFormItemSubmit(evt) {
    evt.preventDefault();
    popupAddCard.classList.remove('popup_opened');
    creatCard(inputImg.value, inputTitle.value);
    inputImg.value = '';
    inputTitle.value = '';
}
formCard.addEventListener('submit', handleFormItemSubmit);