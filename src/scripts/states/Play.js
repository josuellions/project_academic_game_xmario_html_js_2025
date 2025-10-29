var Play = function (game) {};

Play.prototype = {
  init: function () {},
  preload: function () {},
  update: function () {
    this.game.physics.arcade.collide(this.caixas, this.pilares);
    this.game.physics.arcade.collide(this.caixas, this.solo);
    this.game.physics.arcade.collide(this.caixas, this.plataformas);
    this.game.physics.arcade.collide(this.caixas, this.caixas);
  },
  create: function () {
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.criarCenario();
    this.criarPlataforma();
    this.criarCaixas();
  },
  criarCenario: function () {
    // this.game.add.text(400, 160, "Play", {
    //   fill: "#fff",
    // });
    // this.game.add.text(350, 210, "Game XMario", {
    //   fill: "#fff",
    // });

    this.game.stage.backgroundColor = "#d0f4f7";
    this.game.add.tileSprite(
      0,
      this.game.world.height - 42 - 63,
      this.game.width,
      231,
      "fundo",
      0
    );

    this.pilares = this.game.add.group();

    var pilar1 = this.pilares.create(0, 200, "pilares");
    var pilar2 = this.pilares.create(
      this.game.world.width - 21,
      200,
      "pilares"
    );

    this.game.physics.arcade.enable(this.pilares);

    this.pilares.enableBody = true;
    pilar1.enableBody = true;
    pilar1.body.immovable = true;
    pilar1.body.moves = false;

    pilar2.enableBody = true;
    pilar2.body.immovable = true;
    pilar2.body.moves = false;

    this.tipoSolo = this.game.rnd.integerInRange(0, 5);

    this.solo = this.game.add.tileSprite(
      0,
      this.game.world.height - 42,
      this.game.width,
      42,
      "solos",
      this.tipoSolo
    );

    this.game.physics.arcade.enable(this.solo);
    this.solo.enableBody = true;
    this.solo.body.immovable = true;
    this.solo.body.moves = false;
  },
  criarPlataforma: function () {
    this.plataformas = this.game.add.group();

    this.game.physics.arcade.enable(this.plataformas);
    this.plataformas.enableBody = true;

    var minPlataformas = 10;
    var maxPlataformas = 15;
    var quantidade = this.game.rnd.integerInRange(
      minPlataformas,
      maxPlataformas
    );

    var posicoesY = [9, 13, 15];

    for (var i = 0; i < quantidade; i++) {
      var x =
        this.game.rnd.integerInRange(
          0,
          Math.floor(this.game.world.width / 21 - 1)
        ) * 21;
      var y =
        posicoesY[this.game.rnd.integerInRange(0, posicoesY.length - 1)] * 21;

      var largura = this.game.rnd.integerInRange(2, 3) * 21;

      var plataforma = this.game.add.tileSprite(
        x,
        y,
        largura,
        21,
        "solos",
        this.tipoSolo,
        this.plataformas
      );

      plataforma.body.immovable = true;
      plataforma.body.moves = false;
    }
  },
  criarCaixas: function () {
    this.caixas = this.game.add.group();

    this.game.physics.arcade.enable(this.caixas);
    this.caixas.enableBody = true;

    var minCaixas = 5;
    var maxCaixas = 10;
    var quantidade = this.rnd.integerInRange(minCaixas, maxCaixas);

    for (var i = 0; i < quantidade; i++) {
      var x =
        this.game.rnd.integerInRange(
          1,
          Math.floor(this.game.world.width / 21) - 1
        ) * 21;
      var y = this.game.rnd.integerInRange(0, 5) * 21;

      var caixa = this.caixas.create(x, y, "caixas");

      caixa.frame = this.game.rnd.integerInRange(0, 3);

      caixa.body.gravity.y = 300;
      caixa.body.bounce.y = 0.2 + Math.random() * 0.2;
    }
  },
};
