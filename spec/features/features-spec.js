describe('Features', () => {
  var Game = require('../../src/game')
  var boardExports = require('../../src/board')
  var game

  beforeEach(() => {
    game = new Game(new boardExports.Board())
  })

  describe('Playing a game', () => {
    it('results in a win for X when 0, 1, and 2 are filled with X', () => {
      game.addMove(0)
      game.addMove(3)
      game.addMove(1)
      game.addMove(6)
      game.addMove(2)
      expect(game.calculateWinner()).toEqual('X')
    })
  })
})
