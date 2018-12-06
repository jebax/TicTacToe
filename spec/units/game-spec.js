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

    it('starts with X as the next player', () => {
      expect(game.nextPlayerX).toBe(true)
    })

    it('can switch players', () => {
      game.switchMove()
      expect(game.nextPlayerX).toBe(false)
    })

    it("can add a move to update its board's squares", () => {
      square = 0
      game.addMove(square)
      expect(game.board.squares[square]).toEqual('X')
    })
  })
})
