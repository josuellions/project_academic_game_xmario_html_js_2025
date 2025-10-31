var GameOver = function (game) {};

GameOver.prototype = {
  init: function (pontos) {
    this.pontos = pontos != null ? pontos : 0;
  },
  preload: function () {
    this.game.load.image("gameover", "./src/assets/img/gameover.png");
    this.game.load.image(
      "fundo_gameover",
      "./src/assets/img/fundo_gameover.png"
    );
    this.load.spritesheet(
      "buttonPlay",
      "./src/assets/img/botao_play.png",
      64,
      32
    );
  },
  create: function () {
    this.game.stage.backgroundColor = "#000";

    this.fundo = this.game.add.image(
      this.game.world.centerX,
      this.game.world.height,
      "fundo_gameover"
    );
    this.fundo.anchor.setTo(0.5, 1);

    this.titulo = this.game.add.sprite(this.game.world.centerX, 30, "gameover");
    this.titulo.anchor.setTo(0.5, 0);

    this.botaoContinuar = this.game.add.button(
      this.game.world.centerX,
      this.game.world.height - 30,
      "buttonPlay",
      this.acaoBotaoContinuar,
      this,
      1,
      0,
      1
    );
    this.botaoContinuar.anchor.setTo(0.5, 0.5);

    var estilo = {
      font: "bold 24px Arial",
      fill: "#fff",
      boundsAlignH: "center",
      boundsAlignV: "middle",
    };

    var pontosText = this.pontos > 1 ? " pontos!" : " ponto!";
    var texto = this.game.add.text(
      0,
      this.game.world.centerY,
      this.pontos + pontosText,
      estilo
    );

    texto.setShadow(3, 3, "rgba(0, 0, 0, 0.5)", 2);

    texto.setTextBounds(
      0,
      this.game.world.centerY,
      this.game.world.width,
      -540
    );
  },
  acaoBotaoContinuar: function () {
    var evt = this.time.events.add(
      Phaser.Timer.SECOND * 3,
      function () {
        this.game.state.start("Play");
        this.time.events.remove(evt); // remove manualmente
      },
      this
    );
  },
};
