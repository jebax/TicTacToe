class Game {
  constructor(board) {
    this.board = board
    this.nextPlayerX = true
  }

  calculateWinner() {}

  addMove(squareNumber) {
    if (this.nextPlayerX === true) {
      this.board.squares[squareNumber] = 'X'
    } else {
      this.board.squares[squareNumber] = 'O'
    }
    this.switchPlayer()
  }

  switchPlayer() {
    if (this.nextPlayerX) {
      this.nextPlayerX = false
    } else {
      this.nextPlayerX = true
    }
  }
}

module.exports = Game
