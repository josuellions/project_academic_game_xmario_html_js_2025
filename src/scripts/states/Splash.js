var Splash = function (game) {};

Splash.prototype = {
  init: function () {},
  preload: function () {
    this.load.image("logoGame", "./src/assets/img/logotipo_jogo.png");
    this.load.image("barLoading", "./src/assets/img/barra_loading.png");
  },
  create: function () {
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
