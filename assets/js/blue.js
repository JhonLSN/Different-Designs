// Variables Header
const blue = document.querySelector('.main__wrapper__card-blue__btn');
const body_2 = document.querySelector('body')
const header_2 = document.querySelector('.header')
const h1_2 = document.querySelector('.header__wrapper__introduction__title')
const p_2 = document.querySelector('.header__wrapper__introduction__paragraph')
const anchor_2 = document.querySelector('.header__wrapper__introduction__btn')

// Variables Main
const h1Two_2 = document.querySelector('.main__wrapper__title')
const pTwo_2 = document.querySelector('.main__wrapper__paragraph')
const cardRed_2 = document.querySelector('.main__wrapper__card-red')
const cardBlue_2 = document.querySelector('.main__wrapper__card-blue')
const cardBlack_2 = document.querySelector('.main__wrapper__card-black')
const cardYellow_2 = document.querySelector('.main__wrapper__card-yellow')
const cardGreen_2 = document.querySelector('.main__wrapper__card-green')
const cardPink_2 = document.querySelector('.main__wrapper__card-pink')
const btnRed_2 = document.querySelector('.main__wrapper__card-red__btn')
const btnBlue_2 = document.querySelector('.main__wrapper__card-blue__btn')
const btnBlack_2 = document.querySelector('.main__wrapper__card-black__btn')
const btnYellow_2 = document.querySelector('.main__wrapper__card-yellow__btn')
const btnGreen_2 = document.querySelector('.main__wrapper__card-green__btn')
const btnPink_2 = document.querySelector('.main__wrapper__card-pink__btn')

// Footer
const footer_2 = document.querySelector('footer')

blue.addEventListener('click', () => {
    corps_2()
    img_2()
    title_2()
    paragraph_2()
    btn_2()
    titleTwo_2()
    paragraphTwo_2()
    cardOne_2()
    cardTwo_2()
    cardThree_2()
    cardFor_2()
    cardFive_2()
    cardSix_2()
    btnOne_2()
    btnTwo_2()
    btnThree_2()
    btnFor_2()
    btnFive_2()
    btnSix_2()
    baseboard_2()
});

// Header
function corps_2() {
    body_2.classList.toggle('blue')
}

function img_2() {
    header_2.classList.toggle('blue');
}

function title_2() {
    h1_2.classList.toggle('blue')
}

function paragraph_2() {
    p_2.classList.toggle('blue')
}

function btn_2() {
    anchor_2.classList.toggle('blue')
}

// Main
function titleTwo_2() {
    h1Two_2.classList.toggle('blue');
}

function paragraphTwo_2() {
    pTwo_2.classList.toggle('blue');
}

function cardOne_2() {
    cardRed_2.classList.toggle('blue');
}

function cardTwo_2() {
    cardBlue_2.classList.toggle('blue');
}

function cardThree_2() {
    cardBlack_2.classList.toggle('blue');
}

function cardFor_2() {
    cardYellow_2.classList.toggle('blue');
}

function cardFive_2() {
    cardGreen_2.classList.toggle('blue');
}

function cardSix_2() {
    cardPink_2.classList.toggle('blue');
}

function btnOne_2() {
    btnRed_2.classList.toggle('blue');
}

function btnTwo_2() {
    btnBlue_2.classList.toggle('blue');
    if(btnBlue_2.innerHTML == 'Habilitar'){
        btnBlue_2.innerHTML = 'Desabilitar'
    }else{
        btnBlue_2.innerHTML = 'Habilitar'
    }
}

function btnThree_2() {
    btnBlack_2.classList.toggle('blue');
}

function btnFor_2() {
    btnYellow_2.classList.toggle('blue');
}

function btnFive_2() {
    btnGreen_2.classList.toggle('blue');
}

function btnSix_2() {
    btnPink_2.classList.toggle('blue');
}

// Footer
function baseboard_2(){
    footer_2.classList.toggle('blue')
}
