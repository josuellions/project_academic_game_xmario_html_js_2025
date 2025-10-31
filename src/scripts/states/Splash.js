var Splash = function (game) {};

Splash.prototype = {
  init: function () {},
  preload: function () {
    this.load.image("logoSplash", "./src/assets/img/phaser.png");

    this.load.image("logoGame", "./src/assets/img/logotipo_jogo.png");
    this.load.image("barLoading", "./src/assets/img/barra_loading.png");
  },
  create: function () {
    this.game.stage.backgroundColor = "#0099cc";
    this.logo = this.game.add.sprite(
      this.game.world.centerX,
      this.game.world.centerY,
      "logoSplash"
    );

    this.logo.anchor.setTo(0.5, 0.5);

    var evt = this.time.events.add(
      Phaser.Timer.SECOND * 1,
      function () {
        this.game.state.start("Preload");
        this.time.events.remove(evt); // remove manualmente
      },
      this
    );
  },
};
