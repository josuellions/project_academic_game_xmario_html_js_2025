var Menu = function (game) {};

Menu.prototype = {
  init: function () {},
  preload: function () {},
  create: function () {
    this.game.add.text(400, 160, "Initial", {
      fill: "#fff",
    });
    this.game.add.text(350, 210, "Game XMario", {
      fill: "#fff",
    });
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
