class Game {
  constructor(board) {
    this.board = board
    this.nextPlayerX = true
  }

  calculateWinner() {}

  addMove(squareNumber) {
    this.board.squares[squareNumber] = 'X'
  }

  switchMove() {
    if (this.nextPlayerX) {
      this.nextPlayerX = false
    } else {
      this.nextPlayerX = true
    }
  }
}

module.exports = Game
