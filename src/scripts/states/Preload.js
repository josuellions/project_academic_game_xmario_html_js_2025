var Preload = function (game) {};

Preload.prototype = {
  init: function () {},
  create: function () {
    var evt = this.time.events.add(
      Phaser.Timer.SECOND * 3,
      function () {
        this.game.state.start("Menu");
        this.time.events.remove(evt); // remove manualmente
      },
      this
    );
  },
  preload: function () {
    this.logoGame = this.game.add.sprite(
      this.game.world.centerX,
      this.game.world.centerY,
      "logoGame"
    );
    this.logoGame.anchor.setTo(0.5, 0);

    this.barLoading = this.game.add.sprite(
      this.game.world.centerX,
      this.game.world.height - 50,
      "barLoading"
    );
    this.barLoading.anchor.setTo(0.5, 0);

    this.load.setPreloadSprite(this.barLoading);

    this.load.spritesheet(
      "buttonPlay",
      "./src/assets/img/botao_play.png",
      64,
      32
    );
  },
};
