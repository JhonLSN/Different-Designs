// Variables Header
const black = document.querySelector('.main__wrapper__card-black__btn');
const body_3 = document.querySelector('body')
const header_3 = document.querySelector('.header')
const h1_3 = document.querySelector('.header__wrapper__introduction__title')
const p_3 = document.querySelector('.header__wrapper__introduction__paragraph')
const anchor_3 = document.querySelector('.header__wrapper__introduction__btn')

// Variables Main
const h1Two_3 = document.querySelector('.main__wrapper__title')
const pTwo_3 = document.querySelector('.main__wrapper__paragraph')
const cardRed_3 = document.querySelector('.main__wrapper__card-red')
const cardBlue_3 = document.querySelector('.main__wrapper__card-blue')
const cardBlack_3 = document.querySelector('.main__wrapper__card-black')
const cardYellow_3 = document.querySelector('.main__wrapper__card-yellow')
const cardGreen_3 = document.querySelector('.main__wrapper__card-green')
const cardPink_3 = document.querySelector('.main__wrapper__card-pink')
const btnRed_3 = document.querySelector('.main__wrapper__card-red__btn')
const btnBlue_3 = document.querySelector('.main__wrapper__card-blue__btn')
const btnBlack_3 = document.querySelector('.main__wrapper__card-black__btn')
const btnYellow_3 = document.querySelector('.main__wrapper__card-yellow__btn')
const btnGreen_3 = document.querySelector('.main__wrapper__card-green__btn')
const btnPink_3 = document.querySelector('.main__wrapper__card-pink__btn')

// Footer
const footer_3 = document.querySelector('footer')

black.addEventListener('click', () => {
    corps_3()
    img_3()
    title_3()
    paragraph_3()
    btn_3()
    titleTwo_3()
    paragraphTwo_3()
    cardOne_3()
    cardTwo_3()
    cardThree_3()
    cardFor_3()
    cardFive_3()
    cardSix_3()
    btnOne_3()
    btnTwo_3()
    btnThree_3()
    btnFor_3()
    btnFive_3()
    btnSix_3()
    baseboard_3()
});

// Header
function corps_3() {
    body_3.classList.toggle('black')
}

function img_3() {
    header_3.classList.toggle('black');
}

function title_3() {
    h1_3.classList.toggle('black')
}

function paragraph_3() {
    p_3.classList.toggle('black')
}

function btn_3() {
    anchor_3.classList.toggle('black')
}

// Main
function titleTwo_3() {
    h1Two_3.classList.toggle('black');
}

function paragraphTwo_3() {
    pTwo_3.classList.toggle('black');
}

function cardOne_3() {
    cardRed_3.classList.toggle('black');
}

function cardTwo_3() {
    cardBlue_3.classList.toggle('black');
}

function cardThree_3() {
    cardBlack_3.classList.toggle('black');
}

function cardFor_3() {
    cardYellow_3.classList.toggle('black');
}

function cardFive_3() {
    cardGreen_3.classList.toggle('black');
}

function cardSix_3() {
    cardPink_3.classList.toggle('black');
}

function btnOne_3() {
    btnRed_3.classList.toggle('black');
}

function btnTwo_3() {
    btnBlue_3.classList.toggle('black');
}

function btnThree_3() {
    btnBlack_3.classList.toggle('black');
    if(btnBlack.innerHTML == 'Habilitar'){
        btnBlack.innerHTML = 'Desabilitar'
    }else{
        btnBlack.innerHTML = 'Habilitar'
    }
}

function btnFor_3() {
    btnYellow_3.classList.toggle('black');
}

function btnFive_3() {
    btnGreen_3.classList.toggle('black');
}

function btnSix_3() {
    btnPink_3.classList.toggle('black');
}

// Footer
function baseboard_3(){
    footer_3.classList.toggle('black')
}
