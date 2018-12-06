const winningMoves = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const isWinningCombination = (squares, combination) => {
  let x = combination[0]
  let y = combination[1]
  let z = combination[2]

  if (squares[x] && squares[x] === squares[y] && squares[y] === squares[z]) {
    winningPlayer = squares[x]
    return winningPlayer
  }
}

module.exports = { winningMoves, isWinningCombination }
