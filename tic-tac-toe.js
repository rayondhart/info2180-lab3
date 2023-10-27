window.addEventListener('DOMContentLoaded', (event) => {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.classList.add('square');
    });
});

let board = Array(9).fill(null);
let player = 'x';

function handleClick(event) {
    let square = event.target;
    if (square.classList.contains('square') && !square.classList.contains('X') && !square.classList.contains('O')) {
        square.classList.add(player);
        board[square.dataset.square] = player;
        togglePlayer();
    }
}

function togglePlayer() {
    player = (player === 'x') ? 'o' : 'x';
}

window.addEventListener('DOMContentLoaded', (event) => {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });
});

function handleMouseover(event) {
    if (event.target.classList.contains('square') && !event.target.classList.contains('X') && !event.target.classList.contains('O')) {
        event.target.classList.add('hover');
    }
}

function handleMouseout(event) {
    if (event.target.classList.contains('hover')) {
        event.target.classList.remove('hover');
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', handleMouseover);
        square.addEventListener('mouseout', handleMouseout);
    });
});

function checkForWinner() {
    let lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let line of lines) {
        let [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            declareWinner(board[a]);
            return;
        }
    }

    let openSquares = board.filter((value) => value === null);
    if (openSquares.length === 0) {
        declareWinner(null);
    }
}

function declareWinner(winner) {
    let status = document.getElementById('status');
    if (winner) {
        status.textContent = `Congratulations! ${winner.toUpperCase()} is the Winner!`;
    } else {
        status.textContent = `It's a tie!`;
    }
    status.classList.add('you-won');
}

function newGame() {
    board = Array(9).fill(null);
    player = 'x';
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.classList.remove('X', 'O');
    });
    let status = document.getElementById('status');
    status.textContent = `It's your turn, ${player.toUpperCase()}!`;
    status.classList.remove('you-won');
}

window.addEventListener('DOMContentLoaded', (event) => {
    let newGameButton = document.getElementById('new-game');
    newGameButton.addEventListener('click', newGame);
});

function handleClick(event) {
    let square = event.target;
    if (square.classList.contains('square') && !square.classList.contains('X')