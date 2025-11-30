const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X';
let hasGameEnded = false;

// Update the board 
function updateBoard() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {

            const cell = document.getElementById(`cell${i}${j}`);
            const value = board[i][j];

            cell.innerText = value;

            if (value === 'X') {
                cell.className = 'x-chip';
            } else if (value === 'O') {
                cell.className = 'o-chip';
            } else {
                cell.className = '';
            }
        }
    }
}

window.onload = updateBoard;


function cellClicked(row, col) {

    let message = document.getElementById("message");
    message.textContent = "";

    if (hasGameEnded) {
        message.textContent ="The game has ended! Please reset the game.";
    return;
}


    // Find lowest empty slot in this column
    let dropRow = -1;
    for (let r = board.length - 1; r >= 0; r--) {
        if (board[r][col] === '') {
            dropRow = r;
            break;
        }
    }

    // Check if column is full
    if (dropRow === -1) {
        message.textContent = "Column is full!";
        return;
    }

   
    const placingPlayer = currentPlayer;

   
    animateDrop(dropRow, col, placingPlayer, function() {

        // Place chip 
        board[dropRow][col] = placingPlayer;

        updateBoard();

        // Check winner and display message 
        const winner = checkWinner();
        if (winner !== null) {
            if (winner === "tie") {
                message.textContent = "It's a tie!";
            } else {
                message.textContent = `Player ${winner} wins!`;
            }
            hasGameEnded = true;
        } else {
            // Switch player
            currentPlayer = (currentPlayer === "X") ? "O" : "X";
        }
    });
}


// Winner check function
function checkWinner() {

    let result = null;

    const rows = 6;
    const cols = 3;

    const directions = [
        { r: 0, c: 1 },   // →
        { r: 1, c: 0 },   // ↓
        { r: 1, c: 1 },   // ↘
        { r: 1, c: -1 }   // ↙
    ];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            const p = board[r][c];

            if (p === '') continue;

            for (let d = 0; d < directions.length; d++) {
                const dr = directions[d].r;
                const dc = directions[d].c;

                let r1 = r + dr;
                let c1 = c + dc;
                let r2 = r + 2 * dr;
                let c2 = c + 2 * dc;

                // Cheeck Boundaries
                if (r2 < 0 || r2 >= rows || c2 < 0 || c2 >= cols) continue;

                // 3 in a row
                if (board[r1][c1] === p && board[r2][c2] === p) {
                    result = p;
                }
            }
        }
    }

    // Check tie
    if (result === null) {
        let full = true;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === '') {
                    full = false;
                    break;
                }
            }
        }

        if (full) result = "tie";
    }

    return result;
}


// Reset game
function resetGame() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] = '';
        }
    }

    currentPlayer = 'X';
    hasGameEnded = false;

    message.textContent = "";
    updateBoard();
}


// Falling animation 
function animateDrop(finalRow, col, player, callback) {
    const chip = document.getElementById("fallingChip");

    chip.textContent = player;

    const targetCell = document.getElementById(`cell${finalRow}${col}`);
    const rect = targetCell.getBoundingClientRect();

    chip.style.left = rect.left + "px";
    chip.style.top = rect.top - (50 * finalRow) - 60 + "px";

    chip.style.opacity = 1;

    requestAnimationFrame(() => {
        chip.style.transform = `translateY(${(50 * finalRow) + 60}px)`;
    });

    setTimeout(() => {
        chip.style.opacity = 0;
        chip.style.transform = "none";
        callback();
    }, 300);
}
