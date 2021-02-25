const sliderItem = document.querySelectorAll('.pets__cards__oneCard'),
  paginationButtons = document.querySelectorAll('.navigation__button-paginator'),
  previousButton = document.getElementById('prevPage'),
  nextButton = document.getElementById('nextPage'),
  firstPageButton = document.getElementById('startPage'),
  lastPageButton = document.getElementById('endPage'),
  sliderPageNumber = document.getElementById('countPage'),
  cardWrapper = document.querySelector(".pets__cards");

// random pets list
fullPetsList = sort863Elements(fullPetsList);

let boardSize = setNumsElementOnPage();
let maxPage = setMaxPage();
let currentPage = 1;
sliderPageNumber.innerHTML = currentPage;

function insertItems() {
  let str = '';
  boardSize = setNumsElementOnPage();
  let start = boardSize * (currentPage - 1)
  for (let i = start; i < start + boardSize; i++) {
    str = str + `<div class="pets__cards__oneCard"><img class="pets__cards__image" src="${fullPetsList[i].img}">
    <p class="pets__cards__title">${fullPetsList[i].name}</p>
    <button class="pets__cards__button" type="button">Learn more</button></div>`;
  }
  
  cardWrapper.innerHTML = str;
}

function deletePreviousElements() {
  sliderItem.forEach(slide => {
    slide.classList.remove('visible');
  })
  setTimeout(() => {
    sliderItem.forEach(slide => {
      while (slide.firstChild) {
        slide.removeChild(slide.firstChild);
      }
    });
  }, 200);
}

// create random pets array
insertItems(fullPetsList.slice((currentPage - 1)  * boardSize, (currentPage - 1)  * boardSize + boardSize));

nextButton.addEventListener('click', () => {
  maxPage = setMaxPage();
  currentPage += 1;
  sliderPageNumber.innerHTML = currentPage;

  getContent(currentPage);
  if (currentPage > 1) {
    previousButton.classList.remove('button_inactive');
    previousButton.disabled = false;
    firstPageButton.classList.remove('button_inactive');
    firstPageButton.disabled = false;
  }
  if (currentPage === maxPage) {
    nextButton.classList.add('button_inactive');
    nextButton.disabled = true;
    lastPageButton.classList.add('button_inactive');
    lastPageButton.disabled = true;
  }
});

previousButton.addEventListener('click', () => {
  maxPage = setMaxPage();
  currentPage -= 1;
  sliderPageNumber.innerHTML = currentPage;

  getContent(currentPage);

  if (currentPage > 1) {
    nextButton.classList.remove('button_inactive');
    nextButton.disabled = false;
    lastPageButton.classList.remove('button_inactive');
    lastPageButton.disabled = false;
    
  } else {
    previousButton.classList.add('button_inactive');
    previousButton.disabled = true;
    firstPageButton.classList.add('button_inactive');
    firstPageButton.disabled = true;
  }
});

firstPageButton.addEventListener('click', () => {
  maxPage = setMaxPage();
  currentPage = 1;
  sliderPageNumber.innerHTML = currentPage;
  getContent(currentPage);
  previousButton.classList.add('button_inactive');
  previousButton.disabled = true;
  firstPageButton.classList.add('button_inactive');
  firstPageButton.disabled = true;
  nextButton.classList.remove('button_inactive');
  nextButton.disabled = false;
  lastPageButton.classList.remove('button_inactive');
  lastPageButton.disabled = false;
});

lastPageButton.addEventListener('click', () => {
  maxPage = setMaxPage();
  currentPage = maxPage;
  sliderPageNumber.innerHTML = currentPage;
  getContent(currentPage);
  nextButton.classList.add('button_inactive');
  nextButton.disabled = true;
  lastPageButton.classList.add('button_inactive');
  lastPageButton.disabled = true;
  previousButton.classList.remove('button_inactive');
  previousButton.disabled = false;
  firstPageButton.classList.remove('button_inactive');
  firstPageButton.disabled = false;
})

window.addEventListener('resize', function() {
  if (window.innerWidth < 1279 && window.innerWidth >= 768) {
    maxPage = setMaxPage();
    checkLastPage();
    boardSize = 6;
    getContent(currentPage);
    return;
  }

  if (window.innerWidth < 768) {
    maxPage = setMaxPage();
    checkLastPage();
    boardSize = 3;
    return;
  }

  checkLastPage();
  maxPage = setMaxPage();
  sliderPageNumber.innerHTML = currentPage;

  getContent(currentPage);
}, false);

function getContent(page) {
  deletePreviousElements();

  setTimeout(() => {
    insertItems(fullPetsList.slice((page - 1)  * boardSize, (page - 1)  * boardSize + boardSize));
    }, 200);
}

function checkLastPage() {
  maxPage = setMaxPage();

  if (currentPage >= maxPage) {
    currentPage = setMaxPage();
    nextButton.classList.add('button_inactive');
    nextButton.disabled = true;
    lastPageButton.classList.add('button_inactive');
    lastPageButton.disabled = true;
    sliderPageNumber.innerHTML = currentPage;
  } else {
    nextButton.classList.remove('button_inactive');
    nextButton.disabled = false;
    lastPageButton.classList.remove('button_inactive');
    lastPageButton.disabled = false;
  }
}

function setMaxPage() {
  let width = document.documentElement.clientWidth;
  if (width > 1279) {
      return 6;
  } else if (width < 768) {
      return 16;
  } else {
      return 8;
  }
}

function setNumsElementOnPage() {
  let width = document.documentElement.clientWidth;
  if (width > 1279) {
      return 8;
  } else if (width < 768) {
      return 3;
  } else {
      return 6;
  }
}


