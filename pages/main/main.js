const menu_burger = document.querySelector('.menu_burger');
const menu = document.getElementById('menu');
menu.className = "menu";
const logo = document.querySelector('.logo');
const overlay = document.querySelector('.overlay');

menu_burger.addEventListener(`click`, function() {
    if (menu.classList.contains('slide-in')) {
        menu_burger.classList.remove('active');
        menu.classList.remove('slide-in');
        menu.classList.add('slide-out');
        document.body.classList.remove('body_lock');
        logo.style.visibility = "visible";

        overlay.classList.remove("overlay-display");
        overlay.classList.add("overlay-none");
    } else  {
        menu_burger.classList.add('active');
        menu.classList.add('slide-in');
        logo.style.visibility = "hidden";
        menu.classList.remove('slide-out');
        document.body.classList.add('body_lock');

        overlay.classList.remove("overlay-none");
        overlay.classList.add("overlay-display");
    }
});

overlay.addEventListener(`click`, function() {
    if (overlay.classList.contains("overlay-display")) {
        menu_burger.classList.remove('active');
        menu.classList.remove('slide-in');
        menu.classList.add('slide-out');
        document.body.classList.remove('body_lock');
        logo.style.visibility = "visible";

        overlay.classList.remove("overlay-display");
        overlay.classList.add("overlay-none");
    }
});

window.addEventListener('resize', function() {
    if (document.querySelector('body').scrollWidth >= 321) {
      menu.classList.remove('slide-out');
    } 
})

// slider
let petsArr = pets;

let currPos = 0;
let currentSlider = getRandomArray(3, 7);
let pastSlider;

const sliderItem = document.querySelectorAll('.pets__cards__oneCard');

createElements = () => {
    let str = '';
    newElements = getPets(currentSlider);
    console.log(newElements);

    let i = 0;
    newElements.forEach(item => {
        str += `<img class="pets__cards__image" src="${item.img}" alt="${item.type} ${item.name}">
        <p class="pets__cards__title>${item.name}</p>     
        <button class="pets__cards__button" type="button">Learn more</button>`
    });

    return str;
};

function insertItems(newElements) {
    let i = 0;

    newElements.forEach(item => {
      sliderItem[i].insertAdjacentHTML('beforeend', 
      `<img class="pets__cards__image" src="${item.img}" alt="${item.type} ${item.name}"> 
      <p class="pets__cards__title">${item.name}</p> 
      <button class="pets__cards__button" type="button">Learn more</button>;`);
      i += 1;
    });

    sliderItem.forEach(slide => {
        slide.classList.add('visible');
    })
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

// initial arr with random cards
newElements = getPets(currentSlider);
insertItems(newElements);

let pageCounter = 0;
const prevPet = document.getElementById("prevPet");
const nextPet = document.getElementById("nextPet");

prevPet.addEventListener('click',() => changePets());

nextPet.addEventListener('click', () => changePets());

function changePets () {
    // next cards relatively previous cards
    pastSlider = currentSlider;
    currentSlider = getRandomArrayRel(3, pastSlider, 7);
    newElements = getPets(currentSlider);

    deletePreviousElements();
        setTimeout(() => {
            insertItems(newElements);
        }, 200);
}

function getPets(arr) {
    petSliderArr = [];

    arr.forEach(item => {
        petSliderArr.push(petsArr[item]);
    });

    return petSliderArr;
}

function getRandomArray(len, maxVal) {
    let num;
    let arr = [];

    for (let i = 0; i < len; i++) {
        num = getRandomInt(0, maxVal);
        if (!arr.includes(num)) {
            arr.push(num);
        } else {
            i -= 1;
        }
    }

    return arr;
}

function getRandomArrayRel(len, arr, maxVal) {
    let num;
    let newArr = [];

    for (let i = 0; i < len; i++) {
        num = getRandomInt(0, maxVal);
        if (!arr.includes(num) && !newArr.includes(num)) {
            newArr.push(num);
        } else {
            i -= 1;
        }
    }

    return newArr;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}