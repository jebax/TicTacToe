describe('Game', () => {
  var Game = require('../../src/game')
  var game
  var board

  beforeEach(() => {
    board = jasmine.createSpyObj('board', ['setSquareValue'])
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
      game.switchPlayer()
      expect(game.nextPlayerX).toBe(false)
    })

    it("can add a move to update its board's squares with X", () => {
      game.makeMove(0)
      expect(game.board.setSquareValue).toHaveBeenCalledWith(0, 'X')
    })

    it("can add a second move to update it board's squares with O", () => {
      game.makeMove(0)
      game.makeMove(0)
      expect(game.board.setSquareValue).toHaveBeenCalledWith(0, 'O')
    })

    it("switches a player when it makes a move", () => {
      game.makeMove(0)
      expect(game.nextPlayerX).toBe(false)
    })
  })

  describe("A game's winner", () => {
    it('should be X when 0, 1, and 2 are filled with X', () => {
      board.squares = ['X', 'X', 'X', null, null, null, null, null, null]
      expect(game.calculateWinner()).toEqual('X')
    })

    it('should be O when 1, 4, and 7 are filled with O', () => {
      board.squares = [null, 'O', null, null, 'O', null, null, 'O', null]
      expect(game.calculateWinner()).toEqual('O')
    })

    it('should be X when 0, 4, and 8 are filled with X', () => {
      board.squares = ['X', null, null, null, 'X', null, null, null, 'X']
      expect(game.calculateWinner()).toEqual('X')
    })

    it('should be O when 2, 4, and 6 are filled with O', () => {
      board.squares = [null, null, 'O', null, 'O', null, 'O', null, null]
      expect(game.calculateWinner()).toEqual('O')
    })

    it('is undefined when board is filled with non-winning combos', () => {
      board.squares = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X']
      expect(game.calculateWinner()).toEqual()
    })
  })
})
