
const player = document.getElementById('player')
const damper = document.getElementById('damper')
const btn = document.querySelector('.btn-start')

let isStart = false
let intervale

const startGame = () => {
    isStart = true
    damper.classList.add('animate')

    intervale = setInterval(() => {
        let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
        let damperLeft = parseInt(window.getComputedStyle(damper).getPropertyValue('left'))

        if (damperLeft < 50 && damperLeft > 0 && playerTop >= 140) {
            endGame()
            alert('GAME OVER')
        }
    }, 10)
}

const activeJump = () => {
    if (isStart) {
        if (!player.classList.contains('active')) {
            player.classList.add('active')
        }
        setTimeout(() => {
            player.classList.remove('active')
        }, 300)

    }
}

const endGame = () => {
    isStart = false
    console.log('end');
    clearInterval(intervale)
    damper.classList.remove()
}

document.addEventListener('keydown', activeJump)

btn.addEventListener('click', () => {
    startGame()

})