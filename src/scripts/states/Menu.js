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
  },
};
