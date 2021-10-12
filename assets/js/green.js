// Variables Header
const green = document.querySelector('.main__wrapper__card-green__btn');
const body_5 = document.querySelector('body')
const header_5 = document.querySelector('.header')
const h1_5 = document.querySelector('.header__wrapper__introduction__title')
const p_5 = document.querySelector('.header__wrapper__introduction__paragraph')
const anchor_5 = document.querySelector('.header__wrapper__introduction__btn')

// Variables Main
const h1Two_5 = document.querySelector('.main__wrapper__title')
const pTwo_5 = document.querySelector('.main__wrapper__paragraph')
const cardRed_5 = document.querySelector('.main__wrapper__card-red')
const cardBlue_5 = document.querySelector('.main__wrapper__card-blue')
const cardBlack_5 = document.querySelector('.main__wrapper__card-black')
const cardYellow_5 = document.querySelector('.main__wrapper__card-yellow')
const cardGreen_5 = document.querySelector('.main__wrapper__card-green')
const cardPink_5 = document.querySelector('.main__wrapper__card-pink')
const btnRed_5 = document.querySelector('.main__wrapper__card-red__btn')
const btnBlue_5 = document.querySelector('.main__wrapper__card-blue__btn')
const btnBlack_5 = document.querySelector('.main__wrapper__card-black__btn')
const btnYellow_5 = document.querySelector('.main__wrapper__card-yellow__btn')
const btnGreen_5 = document.querySelector('.main__wrapper__card-green__btn')
const btnPink_5 = document.querySelector('.main__wrapper__card-pink__btn')

// Footer
const footer_5 = document.querySelector('footer')

green.addEventListener('click', () => {
    corps_5()
    img_5()
    title_5()
    paragraph_5()
    btn_5()
    titleTwo_5()
    paragraphTwo_5()
    cardOne_5()
    cardTwo_5()
    cardThree_5()
    cardFor_5()
    cardFive_5()
    cardSix_5()
    btnOne_5()
    btnTwo_5()
    btnThree_5()
    btnFor_5()
    btnFive_5()
    btnSix_5()
    baseboard_5()
});

// Header
function corps_5() {
    body_5.classList.toggle('green')
}

function img_5() {
    header_5.classList.toggle('green');
}

function title_5() {
    h1_5.classList.toggle('green')
}

function paragraph_5() {
    p_5.classList.toggle('green')
}

function btn_5() {
    anchor_5.classList.toggle('green')
}

// Main
function titleTwo_5() {
    h1Two_5.classList.toggle('green');
}

function paragraphTwo_5() {
    pTwo_5.classList.toggle('green');
}

function cardOne_5() {
    cardRed_5.classList.toggle('green');
}

function cardTwo_5() {
    cardBlue_5.classList.toggle('green');
}

function cardThree_5() {
    cardBlack_5.classList.toggle('green');
}

function cardFor_5() {
    cardYellow_5.classList.toggle('green');
}

function cardFive_5() {
    cardGreen_5.classList.toggle('green');
}

function cardSix_5() {
    cardPink_5.classList.toggle('green');
}

function btnOne_5() {
    btnRed_5.classList.toggle('green');
}

function btnTwo_5() {
    btnBlue_5.classList.toggle('green');
}

function btnThree_5() {
    btnBlack.classList.toggle('green');
}

function btnFor_5() {
    btnYellow.classList.toggle('green');
}

function btnFive_5() {
    btnGreen_5.classList.toggle('green');
    if(btnGreen_5.innerHTML == 'Habilitar'){
        btnGreen_5.innerHTML = 'Desabilitar'
    }else{
        btnGreen_5.innerHTML = 'Habilitar'
    }
}

function btnSix_5() {
    btnPink_5.classList.toggle('green');
}

// Footer
function baseboard_5(){
    footer_5.classList.toggle('green')
}
