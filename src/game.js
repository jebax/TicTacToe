const helpers = require('./winner-helpers')

class Game {
  constructor(board) {
    this.board = board
    this.nextPlayerX = true
    this.winningMoves = helpers.winningMoves
  }

  calculateWinner() {
    for (let i = 0; i < this.winningMoves.length; i++) {
      let combination = this.winningMoves[i]
      return helpers.isWinningCombination(this.board.squares, combination)
    }
  }

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
