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

    this.game.load.image("fundo_menu", "./src/assets/img/fundo_menu.png");
    this.game.load.image("pilares", "./src/assets/img/pilares.png");

    this.load.spritesheet("fundo", "./src/assets/img/fundo.png", 231, 63);
    this.load.spritesheet("solos", "./src/assets/img/solos.png", 21, 42);
    this.load.spritesheet("caixas", "./src/assets/img/caixas.png", 21, 21);
    this.load.spritesheet("jogador", "./src/assets/img/jogador.png", 21, 21);
    this.load.spritesheet(
      "botoes_jogo",
      "./src/assets/img/botoes_jogo.png",
      64,
      64
    );
    this.load.spritesheet("monstros", "./src/assets/img/monstros.png", 21, 21);
    this.load.spritesheet("icones", "./src/assets/img/icones.png", 21, 21);

    this.game.load.image("score", "./src/assets/img/score.png");
    this.game.load.image("fundo_score", "./src/assets/img/fundo_score.png");
    this.game.load.image("gameover", "./src/assets/img/gameover.png");
    this.game.load.image(
      "fundo_gameover",
      "./src/assets/img/fundo_gameover.png"
    );

    this.load.audio("musica", [
      "./src/assets/audio/musica.ogg",
      "./src/assets/audio/musica.mp3",
    ]);

    this.load.audio("pontuou", [
      "./src/assets/audio/pontuou.ogg",
      "./src/assets/audio/pontuou.mp3",
    ]);

    this.load.audio("fimjogo", [
      "./src/assets/audio/fimjogo.ogg",
      "./src/assets/audio/fimjogo.mp3",
    ]);

    this.load.audio("collisao", [
      "./src/assets/audio/colisao.ogg",
      "./src/assets/audio/colisao.mp3",
    ]);
  },
};
