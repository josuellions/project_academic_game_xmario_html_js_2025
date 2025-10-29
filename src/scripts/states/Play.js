var Play = function (game) {};

Play.prototype = {
  init: function () {},
  preload: function () {},
  update: function () {},
  create: function () {
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.criarCenario();
    this.criarPlataforma();
  },
  criarCenario: function () {
    this.game.add.text(400, 160, "Play", {
      fill: "#fff",
    });
    this.game.add.text(350, 210, "Game XMario", {
      fill: "#fff",
    });

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

    var pilar1 = this.pilares.create(0, 0, "pilares");
    var pilar2 = this.pilares.create(this.game.world.width - 21, 0, "pilares");

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
  criarPlataforma: function () {},
};
