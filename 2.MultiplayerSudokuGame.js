// 2. Design a Multiplayer Sudoku Game

// Question: Design a Sudoku game where:

// Players take turns to play based on a "rotating pin" mechanism.
// The player who fills the last empty cell wins.

// Explanation:

// 1. A shared Sudoku board must be synchronized across multiple players.
// 2. Each player is assigned a turn in a fixed sequence.
// 3. The game ends when the board is full, and the winner is determined.

/* -------------------------------------------------------- */
/*   ( The Authentic JS CodeBuff )
 ___ _                      _              _ 
 | _ ) |_  __ _ _ _ __ _ __| |_ __ ____ _ (_)
 | _ \ ' \/ _` | '_/ _` / _` \ V  V / _` || |
 |___/_||_\__,_|_| \__,_\__,_|\_/\_/\__,_|/ |
                                        |__/ 
 */
/* ---------------------------------------------------------   */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj        */
/*    Github :  https://github.com/Manu577228                  */
/* ----------------------------------------------------------- */

// Multiplayer Sudoku Game
class MultiplayerSudoku {
  constructor(board, players) {
    this.board = board; // 9x9 Sudoku board
    this.players = players; // List of players
    this.currentPlayerIndex = 0; // Track whose turn it is
  }

  makeMove(row, col, value) {
    if (this.board[row][col] !== 0) return "Cell already filled";
    this.board[row][col] = value;
    this.rotateTurn();
    return `Player ${this.players[this.currentPlayerIndex]} made a move`;
  }

  rotateTurn() {
    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length;
  }

  checkWinner() {
    return this.board.every((row) => row.every((cell) => cell !== 0));
  }
}

// Test Case
let board = Array(9)
  .fill()
  .map(() => Array(9).fill(0));
let game = new MultiplayerSudoku(board, ["Player1", "Player2"]);
console.log(game.makeMove(0, 0, 5)); // Player1 makes a move
console.log(game.makeMove(0, 1, 3)); // Player2 makes a move
console.log(game.checkWinner()); // false
