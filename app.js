const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const btnStart = document.querySelector('#start')
const header = document.querySelector('#header')
const divPush = document.querySelector('.push')
const popupResult = document.querySelector('#popup-result')
const btnPlayAgain = document.querySelector('#btn-play-again')
const score2 = document.querySelector('#score2')
const star1 = document.querySelector('#star1')
const star2 = document.querySelector('#star2')
const star3 = document.querySelector('#star3')

let result = 0
let hitPosition
let currentTime = 15
let timerId = null
let countDownTimerId

btnStart.addEventListener('click', moveMole)


function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 10)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            score2.textContent = result
            hitPosition = null

            if (result == 1) {
                star1.src = star1.src.replace('img/star_empty.png', 'img/star.png');
            }

            if (result > 1 && result < 5) {
                star1.src = star1.src.replace('img/star_empty.png', 'img/star.png');
                star2.src = star2.src.replace('img/star_empty.png', 'img/star.png');
            }

            if (result >= 5) {
                star1.src = star1.src.replace('img/star_empty.png', 'img/star.png');
                star2.src = star2.src.replace('img/star_empty.png', 'img/star.png');
                star3.src = star3.src.replace('img/star_empty.png', 'img/star.png');
            }

        }
    })
})

function moveMole() {
    btnStart.style.visibility = "hidden"
    header.style.height = '120px'
    divPush.style.height = '320px'

    timerId = setInterval(randomSquare, 500)
    countDownTimerId = setInterval(countDown, 1000)
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        timeLeft.textContent = '0'
        popupResult.style.visibility = 'visible'
        header.style.visibility = 'hidden'

        squares.forEach(square => {
            square.classList.remove('mole')
        })

    }
}

btnPlayAgain.addEventListener('click', function () {
    setTimeout(function () { location.reload() }, 500)
})