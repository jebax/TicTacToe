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
      let result = helpers.isWinningCombination(this.board.squares, combination)
      if (result) { return result }
    }
  }

  makeMove(squareNumber) {
    if (this.nextPlayerX === true) {
      this.board.setSquareValue(squareNumber, 'X')
    } else {
      this.board.setSquareValue(squareNumber, 'O')
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
