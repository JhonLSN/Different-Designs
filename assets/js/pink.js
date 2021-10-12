// Variables Header
const pink = document.querySelector('.main__wrapper__card-pink__btn');
const body_6 = document.querySelector('body')
const header_6 = document.querySelector('.header')
const h1_6 = document.querySelector('.header__wrapper__introduction__title')
const p_6 = document.querySelector('.header__wrapper__introduction__paragraph')
const anchor_6 = document.querySelector('.header__wrapper__introduction__btn')

// Variables Main
const h1Two_6 = document.querySelector('.main__wrapper__title')
const pTwo_6 = document.querySelector('.main__wrapper__paragraph')
const cardRed_6 = document.querySelector('.main__wrapper__card-red')
const cardBlue_6 = document.querySelector('.main__wrapper__card-blue')
const cardBlack_6 = document.querySelector('.main__wrapper__card-black')
const cardYellow_6 = document.querySelector('.main__wrapper__card-yellow')
const cardGreen_6 = document.querySelector('.main__wrapper__card-green')
const cardPink_6 = document.querySelector('.main__wrapper__card-pink')
const btnRed_6 = document.querySelector('.main__wrapper__card-red__btn')
const btnBlue_6 = document.querySelector('.main__wrapper__card-blue__btn')
const btnBlack_6 = document.querySelector('.main__wrapper__card-black__btn')
const btnYellow_6 = document.querySelector('.main__wrapper__card-yellow__btn')
const btnGreen_6 = document.querySelector('.main__wrapper__card-green__btn')
const btnPink_6 = document.querySelector('.main__wrapper__card-pink__btn')

// Footer
const footer_6 = document.querySelector('footer')

pink.addEventListener('click', () => {
    corps_6()
    img_6()
    title_6()
    paragraph_6()
    btn_6()
    titleTwo_6()
    paragraphTwo_6()
    cardOne_6()
    cardTwo_6()
    cardThree_6()
    cardFor_6()
    cardFive_6()
    cardSix_6()
    btnOne_6()
    btnTwo_6()
    btnThree_6()
    btnFor_6()
    btnFive_6()
    btnSix_6()
    baseboard_6()
});

// Header
function corps_6() {
    body_6.classList.toggle('pink')
}

function img_6() {
    header_6.classList.toggle('pink');
}

function title_6() {
    h1_6.classList.toggle('pink')
}

function paragraph_6() {
    p_6.classList.toggle('pink')
}

function btn_6() {
    anchor_6.classList.toggle('pink')
}

// Main
function titleTwo_6() {
    h1Two_6.classList.toggle('pink');
}

function paragraphTwo_6() {
    pTwo_6.classList.toggle('pink');
}

function cardOne_6() {
    cardRed_6.classList.toggle('pink');
}

function cardTwo_6() {
    cardBlue_6.classList.toggle('pink');
}

function cardThree_6() {
    cardBlack_6.classList.toggle('pink');
}

function cardFor_6() {
    cardYellow_6.classList.toggle('pink');
}

function cardFive_6() {
    cardGreen_6.classList.toggle('pink');
}

function cardSix_6() {
    cardPink_6.classList.toggle('pink');
}

function btnOne_6() {
    btnRed_6.classList.toggle('pink');
}

function btnTwo_6() {
    btnBlue_6.classList.toggle('pink');
}

function btnThree_6() {
    btnBlack_6.classList.toggle('pink');
}

function btnFor_6() {
    btnYellow_6.classList.toggle('pink');
}

function btnFive_6() {
    btnGreen_6.classList.toggle('pink');
}

function btnSix_6() {
    btnPink_6.classList.toggle('pink');
    if(btnPink_6.innerHTML == 'Habilitar'){
        btnPink_6.innerHTML = 'Desabilitar'
    }else{
        btnPink_6.innerHTML = 'Habilitar'
    }
}

// Footer
function baseboard_6(){
    footer_6.classList.toggle('pink')
}
