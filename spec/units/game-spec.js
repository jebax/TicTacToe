describe('Game', () => {
  var Game = require('../../src/game')
  var game
  var board

  beforeEach(() => {
    board = jasmine.createSpy('board')
    board.squares = [null, null, null, null, null, null, null, null, null]
    game = new Game(board)
  })

  describe('A game of Tic Tac Toe', () => {
    it('starts with an empty board', () => {
      expect(game.board.squares).toEqual(board.squares)
    })

    it('does not have a winner when it starts', () => {
      expect(game.calculateWinner()).toEqual()
    })
  })
})
