const page = document.querySelector('.page');
const content = page.querySelector('.content');
const profile = content.querySelector('.profile');

const popupElement = content.querySelector('.popup');//Попап
const popupNewItem = content.querySelector('.popup__item-conteiner');//Форма добавления карточек
const profileForm = content.querySelector('.popup__container');// Форма редактироания профиля

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
    elements.append(elementCard);
    return elementCard;
};

const renderCard = (link, name) => {
    elements.prepend(creatCard(link, name));
};

const creatArrayCard = elemCont.forEach((elem) => {
    creatCard(elem.link, elem.name);
    return elem;
});
console.log(elements);

/*
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
    return cardSec;
});
*/


const submitForm = content.querySelector('.popup__submit-buttom');
const profileButton = content.querySelector('.profile__edit-button');
const popupAddCard = content.querySelector('.popup__add-card');
const popupEditProfile = content.querySelector('.popup__edit-profile');
/*
//Popup templete
//const userTemplateCard = content.querySelector('#usercard');
const userTemplate = document.querySelector('#usercard').content;
const userCardNew = userTemplate.querySelector('.popup__item-conteiner').cloneNode(true);
const userCardName = userCardNew.querySelector('.popup__input_item_neim').textContent;
const userCardImg = userCardNew.querySelector('.popup__input_item_profil').src;
 
popupAddCard.append(userCardNew);
*/


// Форма редактирования профиля
const form = content.querySelector('.popup__form');
const userName = profile.querySelector('.profile__info-name');
const userText = profile.querySelector('.profile__info-text');

const nameInput = profileForm.querySelector('.popup__input_type_neim');
const jobInput = profileForm.querySelector('.popup__input_type_profil');

// Обе кнопки закрытия форм
const closeFormItem = popupAddCard.querySelector('.popup__close-item');
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
};
profileAddButton.addEventListener('click', clickAddButton);

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = `${nameInput.value}`;
    userText.textContent = `${jobInput.value}`;
    popupEditProfile.classList.remove('popup_opened');
}
form.addEventListener('submit', handleFormSubmit);
//console.log(form);

const formCard = content.querySelector('.popup__new-item');
const inputTitle = popupAddCard.querySelector('.popup__input_item_neim');//Название карточки мест
const inputImg = popupAddCard.querySelector('.popup__input_item_profil');//Фото карточки


function handleFormItemSubmit(evt) {
    evt.preventDefault();
    popupAddCard.classList.remove('popup_opened');
    creatCard(inputImg.value,inputTitle.value);
    inputImg.value = '';
    inputTitle.value = '';
}
formCard.addEventListener('submit', handleFormItemSubmit);