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
  const x = combination[0]
  const y = combination[1]
  const z = combination[2]

  if (squares[x] && squares[x] === squares[y] && squares[y] === squares[z]) {
    const winningPlayer = squares[x]
    return winningPlayer
  }
}

module.exports = { winningMoves, isWinningCombination }
