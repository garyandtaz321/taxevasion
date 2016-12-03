var Player = require('../models/player');

var Game = function () {
  this.testentity = null;
};

module.exports = Game;

Game.prototype = {

  create: function () {
  },

  update: function () {
  },

  onInputDown: function () {
    this.game.state.start('Menu');
  }
};
