var Player = {
  setMark: function(mark) {
    this.mark = mark;
  }
}

var Game = {
  initialize: function (number) {
    this.createPlayers(number);
    this.nextPlayer();
    this.makeBoard();
  },

  createPlayers: function(number) {
    this.players = [];
    var mark =  ["X","O"];
    for (var i = 0; i < number; i++) {
      var player = Object.create(Player);
      this.players.push(player);
      player.setMark(mark[i]);
    }
  },

  nextPlayer: function() {
    this.currentPlayer = this.players.shift();
    this.players.push(this.currentPlayer);
  },

  makeBoard: function() {
    this.board = [['','',''],
                  ['','',''],
                  ['','','']];
  },

  markSquare: function(row, col) {
    this.board[row][col] = this.currentPlayer.mark;
  },

  isEmptySquare: function(row, col) {
    return this.board[row][col] === "";
  },

  hasWinner: function() {
    var mark = this.currentPlayer.mark;
    this.winningCombination = [];
    for(var i = 0; i < 3; i++) {
      if (this.board[i][0] === mark && this.board[i][1] === mark && this.board[i][2] === mark) {
        return true;
      } else if (this.board[0][i] === mark && this.board[1][i] === mark && this.board[2][i] === mark) {
        return true;
      } else if (this.board[0][0] === mark && this.board[1][1] === mark && this.board[2][2] === mark) {
        return true;
      } else if (this.board[0][2] === mark && this.board[1][1] === mark && this.board[2][0] === mark) {
        return true;
      } 
    }
  },

  isCatsGame: function() {
    return !this.board.some(function(row, number) {
      return row.some(function(square, number) {
        return square === "";
      });
    });
  }
}


$(function() {
  $("button#ok").hide();
  $("div#game-modal").modal("show");

  function newGame() {
    var game = Object.create(Game);
    game.initialize(2);
    $("tbody#board").empty();
    game.board.forEach(function(row, rowNum) {
      $("tbody#board").append("<tr id='row'></tr>");
      row.forEach(function(square, colNum) {
        $("tr#row").last().append("<td class='square'></td>");
        $("td.square").last().click(function() {
          if (game.isEmptySquare(rowNum, colNum)) {
            game.markSquare(rowNum, colNum);
            $(this).append(game.currentPlayer.mark);

            if (game.hasWinner()) {
              $("div.modal-header").children("h3").empty().append(game.currentPlayer.mark + "'s Win");
              $("div.modal-body").empty().append("<img src='img/winner.jpg'></img>");
              $("button#ok").hide();
              $("button#start").show();
              $("#game-modal").modal("show");

            } else if (game.isCatsGame()) {
              $("div.modal-header").children("h3").empty().append("Cat's Game");
              $("div.modal-body").empty().append("<img src='img/tictactoe.jpg'></img>");
              $("button#ok").hide();
              $("button#start").show();
              $("#game-modal").modal("show");
            } else {
              game.nextPlayer();
              $("span#players-turn").empty().append(game.currentPlayer.mark)
            }

          } else {
            $("div.modal-header").children("h3").empty().append("Square Occupied");
            $("div.modal-body").empty().append("<img src='img/occupied.png'></img>");
            $("button#ok").show();
            $("#game-modal").modal("show");
          }
        });
      });
    });
  }

  $("button#ok").click(function() {
    $("#game-modal").modal("hide");
  });

  $("button#start").click(function() {
    newGame();
    $("#game-modal").modal("hide");
    $("div.modal-footer").children("p").empty();
    $("button#start").hide();
  });

});