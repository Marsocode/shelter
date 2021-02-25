const popupDarkScreen = document.querySelector('.popup__dark-screen'),
  popup = document.querySelector('.popup'),
  popupContent = document.querySelector('.popup__content'),
  closeButton = document.querySelector('.popup__close-btn');

document.querySelectorAll('.pets__cards__oneCard').forEach(item => {
  item.addEventListener('click', () => {
    popupContent.innerHTML = '';
    createPopup(item);

    if (popup.classList.contains('popup_none')) {
      popup.classList.remove('popup_none');
      popup.classList.add('popup_visible');
    }
    document.body.classList.add('body_lock');
  })
});

closeButton.addEventListener('click', () => {
  popup.classList.add('popup_none');
  popup.classList.remove('popup_visible');
  document.body.classList.remove('body_lock');
});

popupDarkScreen.addEventListener('click', () => {
  popup.classList.add('popup_none');
  popup.classList.remove('popup_visible');
  document.body.classList.remove('body_lock');
});

function createPopup (sliderCard) {
  petsArr.forEach(petItem => {
    if (petItem['name'] === sliderCard.children[1].innerText) {
      popupContent.insertAdjacentHTML(
        'beforeend',
        `<div class="popup__img">
        <img src="${petItem.img}" alt="${petItem.type} ${petItem.name}">
        </div>
           <div class="popup__info">
             <h3 class="popup__title">${petItem.name}</h3>
             <h4 class="popup__subtitle">${petItem.type} - ${petItem.breed}</h4>
             <p class="popup__description">${petItem.description}</p>
             <ul class="popup__list">
                 <li class="popup__item"><span><strong>Age: </strong>${petItem.age}</span></li>
                 <li class="popup__item"><span><strong>Inoculations: </strong>${petItem.inoculations}</span></li>
                 <li class="popup__item"><span><strong>Diseases: </strong>${petItem.diseases}</span></li>
                 <li class="popup__item"><span><strong>Parasites: </strong>${petItem.parasites}</span></li>
             </ul>
           </div>`
      )
    }
  });
}
