// Variables Header
const yellow = document.querySelector('.main__wrapper__card-yellow__btn');
const body_4 = document.querySelector('body')
const header_4 = document.querySelector('.header')
const h1_4 = document.querySelector('.header__wrapper__introduction__title')
const p_4 = document.querySelector('.header__wrapper__introduction__paragraph')
const anchor_4 = document.querySelector('.header__wrapper__introduction__btn')

// Variables Main
const h1Two_4 = document.querySelector('.main__wrapper__title')
const pTwo_4 = document.querySelector('.main__wrapper__paragraph')
const cardRed_4 = document.querySelector('.main__wrapper__card-red')
const cardBlue_4 = document.querySelector('.main__wrapper__card-blue')
const cardBlack_4 = document.querySelector('.main__wrapper__card-black')
const cardYellow_4 = document.querySelector('.main__wrapper__card-yellow')
const cardGreen_4 = document.querySelector('.main__wrapper__card-green')
const cardPink_4 = document.querySelector('.main__wrapper__card-pink')
const btnRed_4 = document.querySelector('.main__wrapper__card-red__btn')
const btnBlue_4 = document.querySelector('.main__wrapper__card-blue__btn')
const btnBlack_4 = document.querySelector('.main__wrapper__card-black__btn')
const btnYellow_4 = document.querySelector('.main__wrapper__card-yellow__btn')
const btnGreen_4 = document.querySelector('.main__wrapper__card-green__btn')
const btnPink_4 = document.querySelector('.main__wrapper__card-pink__btn')

// Footer
const footer_4 = document.querySelector('footer')

yellow.addEventListener('click', () => {
    corps_4()
    img_4()
    title_4()
    paragraph_4()
    btn_4()
    titleTwo_4()
    paragraphTwo_4()
    cardOne_4()
    cardTwo_4()
    cardThree_4()
    cardFor_4()
    cardFive_4()
    cardSix_4()
    btnOne_4()
    btnTwo_4()
    btnThree_4()
    btnFor_4()
    btnFive_4()
    btnSix_4()
    baseboard_4()
});

// Header
function corps_4() {
    body_4.classList.toggle('yellow')
}

function img_4() {
    header_4.classList.toggle('yellow');
}

function title_4() {
    h1_4.classList.toggle('yellow')
}

function paragraph_4() {
    p_4.classList.toggle('yellow')
}

function btn_4() {
    anchor_4.classList.toggle('yellow')
}

// Main
function titleTwo_4() {
    h1Two_4.classList.toggle('yellow');
}

function paragraphTwo_4() {
    pTwo_4.classList.toggle('yellow');
}

function cardOne_4() {
    cardRed_4.classList.toggle('yellow');
}

function cardTwo_4() {
    cardBlue_4.classList.toggle('yellow');
}

function cardThree_4() {
    cardBlack_4.classList.toggle('yellow');
}

function cardFor_4() {
    cardYellow_4.classList.toggle('yellow');
}

function cardFive_4() {
    cardGreen_4.classList.toggle('yellow');
}

function cardSix_4() {
    cardPink_4.classList.toggle('yellow');
}

function btnOne_4() {
    btnRed_4.classList.toggle('yellow');
}

function btnTwo_4() {
    btnBlue_4.classList.toggle('yellow');
}

function btnThree_4() {
    btnBlack_4.classList.toggle('yellow');
}

function btnFor_4() {
    btnYellow_4.classList.toggle('yellow');
    if(btnYellow_4.innerHTML == 'Habilitar'){
        btnYellow_4.innerHTML = 'Desabilitar'
    }else{
        btnYellow_4.innerHTML = 'Habilitar'
    }
}

function btnFive_4() {
    btnGreen_4.classList.toggle('yellow');
}

function btnSix_4() {
    btnPink_4.classList.toggle('yellow');
}

// Footer
function baseboard_4(){
    footer_4.classList.toggle('yellow')
}
