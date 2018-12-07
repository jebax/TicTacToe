describe('Features', () => {
  var Game = require('../../src/game')
  var Board = require('../../src/board')
  var game

  beforeEach(() => {
    game = new Game(new Board())
  })

  describe('Playing a game', () => {
    it('results in a win for X when 0, 1, and 2 are filled with X', () => {
      game.makeMove(0)
      game.makeMove(3)
      game.makeMove(1)
      game.makeMove(6)
      game.makeMove(2)
      expect(game.calculateWinner()).toEqual('X')
    })
  })
})
