// Variables Header
const red = document.querySelector('.main__wrapper__card-red__btn');
const body = document.querySelector('body')
const header = document.querySelector('.header')
const h1 = document.querySelector('.header__wrapper__introduction__title')
const p = document.querySelector('.header__wrapper__introduction__paragraph')
const anchor = document.querySelector('.header__wrapper__introduction__btn')

// Variables Main
const h1Two = document.querySelector('.main__wrapper__title')
const pTwo = document.querySelector('.main__wrapper__paragraph')
const cardRed = document.querySelector('.main__wrapper__card-red')
const cardBlue = document.querySelector('.main__wrapper__card-blue')
const cardBlack = document.querySelector('.main__wrapper__card-black')
const cardYellow = document.querySelector('.main__wrapper__card-yellow')
const cardGreen = document.querySelector('.main__wrapper__card-green')
const cardPink = document.querySelector('.main__wrapper__card-pink')
const btnRed = document.querySelector('.main__wrapper__card-red__btn')
const btnBlue = document.querySelector('.main__wrapper__card-blue__btn')
const btnBlack = document.querySelector('.main__wrapper__card-black__btn')
const btnYellow = document.querySelector('.main__wrapper__card-yellow__btn')
const btnGreen = document.querySelector('.main__wrapper__card-green__btn')
const btnPink = document.querySelector('.main__wrapper__card-pink__btn')

// Footer
const footer = document.querySelector('footer')

red.addEventListener('click', () => {
    corps()
    img()
    title()
    paragraph()
    btn()
    titleTwo()
    paragraphTwo()
    cardOne()
    cardTwo()
    cardThree()
    cardFor()
    cardFive()
    cardSix()
    btnOne()
    btnTwo()
    btnThree()
    btnFor()
    btnFive()
    btnSix()
    baseboard()
});

// Header
function corps() {
    body.classList.toggle('red')
}

function img() {
    header.classList.toggle('red');
}

function title() {
    h1.classList.toggle('red')
}

function paragraph() {
    p.classList.toggle('red')
}

function btn() {
    anchor.classList.toggle('red')
}

// Main
function titleTwo() {
    h1Two.classList.toggle('red');
}

function paragraphTwo() {
    pTwo.classList.toggle('red');
}

function cardOne() {
    cardRed.classList.toggle('red');
}

function cardTwo() {
    cardBlue.classList.toggle('red');
}

function cardThree() {
    cardBlack.classList.toggle('red');
}

function cardFor() {
    cardYellow.classList.toggle('red');
}

function cardFive() {
    cardGreen.classList.toggle('red');
}

function cardSix() {
    cardPink.classList.toggle('red');
}

function btnOne() {
    btnRed.classList.toggle('red');
    if(btnRed.innerHTML == 'Habilitar'){
        btnRed.innerHTML = 'Desabilitar'
    }else{
        btnRed.innerHTML = 'Habilitar'
    }
}

function btnTwo() {
    btnBlue.classList.toggle('red');
}

function btnThree() {
    btnBlack.classList.toggle('red');
}

function btnFor() {
    btnYellow.classList.toggle('red');
}

function btnFive() {
    btnGreen.classList.toggle('red');
}

function btnSix() {
    btnPink.classList.toggle('red');
}

// Footer
function baseboard(){
    footer.classList.toggle('red')
}
