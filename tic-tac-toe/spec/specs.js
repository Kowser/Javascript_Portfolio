describe("Tic Tac Toe", function() {
  
  describe('Player', function() {
    it('it can be given a mark', function() {
      var player = Object.create(Player);
      player.setMark("X");
      player.mark.should.equal("X");
    });
  });

  describe('Game', function() {

    describe('initialize', function() {
      it('initializes the game', function() {
        var game = Object.create(Game);
        game.initialize(2);
      });
    });

    describe('createPlayers', function() {
      it('can create players', function() {
        var game = Object.create(Game);
        game.createPlayers(2);
        game.players.length.should.equal(2);
      });

      it('gives each player a mark', function() {
        var game = Object.create(Game);
        game.createPlayers(2);
        game.players[0].mark.should.exist;
      });
    });

    describe('nextPlayer', function() {
      it('changes the current player', function() {
        var game = Object.create(Game);
        game.createPlayers(2);
        var nextPlayer = game.players[0];
        game.nextPlayer();
        game.currentPlayer.should.equal(nextPlayer);
      });
    });

    describe('makeBoard', function() {
      it('creates 3 arrays x 3 arrays each with blank values', function() {
        var game = Object.create(Game);
        game.makeBoard();
        game.board[0].should.eql(["","",""]);
      });
    });

    describe('markSquare', function() {
      it("marks a square on the board with the current player's mark", function() {
        var game = Object.create(Game);
        game.makeBoard();
        game.createPlayers(2);
        game.nextPlayer();
        game.markSquare(0,1);
        game.board[0][1].should.equal(game.currentPlayer.mark);
      });
    });

    describe('isEmptySquare', function() {
      it('returns true if the square is empty', function() {
        var game = Object.create(Game);
        game.makeBoard();
        game.isEmptySquare(0,2).should.be.true;
      });
    });

    describe('hasWinner', function() {
      it('is true when there are three in a row in any row', function() {
        var game = Object.create(Game);
        game.makeBoard();
        game.createPlayers(2);
        game.nextPlayer();
        game.markSquare(1,0);
        game.markSquare(1,1);
        game.markSquare(1,2);
        game.hasWinner().should.be.true;
      });

      it('is true when there are three in a row in any column', function() {
        var game = Object.create(Game);
        game.makeBoard();
        game.createPlayers(2);
        game.nextPlayer();
        game.markSquare(0,1);
        game.markSquare(1,1);
        game.markSquare(2,1);
        game.hasWinner().should.be.true;
      });

      it('is true when there are three in a row diagonally', function() {
        var game = Object.create(Game);
        game.makeBoard();
        game.createPlayers(2);
        game.nextPlayer();
        game.markSquare(0,0);
        game.markSquare(1,1);
        game.markSquare(2,2);
        game.hasWinner().should.be.true;
      });
    });

    describe('isCatsGame', function() {
      it('is true when the board is full without any 3 in a row', function() {
        var game = Object.create(Game);
        game.makeBoard();
        game.createPlayers(2);
        game.nextPlayer();
        for (var i = 0; i < 3; i++) {
          game.markSquare(i,0);
          game.nextPlayer();
          game.markSquare(i,1);
          game.markSquare(i,2);
        }
        game.isCatsGame().should.be.true;
      });
    });
  });

});

















