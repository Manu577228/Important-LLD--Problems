// 5. Design Snake and Ladder Game

// Question: Design a Snake and Ladder game with:

// A board of N x N squares.
// Players taking turns to roll a dice and move.
// Snakes and ladders dynamically placed on the board.

// Explanation:

// 1. Snakes take the player to a lower position.
// 2. Ladders move the player to a higher position.
// 3. A player wins by reaching the last cell.

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

// Snake and Ladder Game
class SnakeAndLadder {
  constructor(size, snakes, ladders) {
    this.size = size;
    this.board = new Array(size * size + 1).fill(0);
    snakes.forEach(([start, end]) => (this.board[start] = end));
    ladders.forEach(([start, end]) => (this.board[start] = end));
    this.players = [];
    this.positions = {};
  }

  addPlayer(player) {
    this.players.push(player);
    this.positions[player] = 1;
  }

  playTurn(player, diceRoll) {
    let current = this.positions[player];
    let next = current + diceRoll;
    if (next > this.size * this.size) return `${player} stays at ${current}`;
    if (this.board[next] !== 0) next = this.board[next]; // Check for snake/ladder
    this.positions[player] = next;
    return next === this.size * this.size
      ? `${player} wins!`
      : `${player} moves to ${next}`;
  }
}

// Test Case
let game = new SnakeAndLadder(10, [[16, 8]], [[3, 20]]);
game.addPlayer("Bharadwaj-1");
game.addPlayer("Bharadwaj-2");
console.log(game.playTurn("Bharadwaj-1", 4)); // Bharadwaj-1 moves to 5
console.log(game.playTurn("Bharadwaj-2", 6)); // Bharadwaj-2 moves to 7
