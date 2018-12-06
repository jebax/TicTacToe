describe('Board', () => {
  var boardExports = require('../../src/board')
  var board

  beforeEach(() => {
    board = new boardExports.Board()
  })

  describe('A tic tac toe board', () => {
    it('starts with empty squares', () => {
      let squares = [null, null, null, null, null, null, null, null, null]
      expect(board.squares).toEqual(squares)
    })

    it('can change a specified square to have X as its value', () => {
      board.setSquareValue(4, 'X')
      expect(board.squares[4]).toEqual('X')
    })

    it('can change a specified square to have O as its value', () => {
      board.setSquareValue(5, 'O')
      expect(board.squares[5]).toEqual('O')
    })
  })
})
