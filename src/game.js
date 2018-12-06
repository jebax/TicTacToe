class Game {
  constructor(board) {
    this.board = board
    this.nextPlayerX = true
  }

  calculateWinner() {}

  switchMove() {
    if (this.nextPlayerX) {
      this.nextPlayerX = false
    } else {
      this.nextPlayerX = true
    }
  }
}

module.exports = Game
