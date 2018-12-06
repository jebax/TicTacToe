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
  })
})
