class Board {
  constructor () {
    this.squares = [
      null, null, null,
      null, null, null,
      null, null, null
    ]
  }

  setSquareValue (squareNumber, player) {
    this.squares[squareNumber] = player
  }
}

module.exports = { Board }
