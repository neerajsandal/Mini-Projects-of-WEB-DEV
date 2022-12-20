const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#score1')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#score2')
}
const reset = document.querySelector('#reset')
const play_value = document.querySelector('#play')

let winingscore = 3;
let gameover = false;

function updateScores(player, opponent) {
    if (winingscore !== player.score && gameover == false) {
        player.score += 1;
        player.display.textContent = player.score;
    }
    if (winingscore === player.score) {
        gameover = true;
    }
    if (gameover == true) {
        player.display.classList.add('has-text-success')
        opponent.display.classList.add('has-text-danger')
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
}
p1button.addEventListener('click', function () {
    updateScores(p1, p2);
})

p2button.addEventListener('click', function () {
    updateScores(p2, p1);
})

play_value.addEventListener('change', function () {
    winingscore = parseInt(this.value);
    reset1();
})
reset.addEventListener('click', reset1)
function reset1() {
    for (p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = '0';
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    gameover = false;
}
