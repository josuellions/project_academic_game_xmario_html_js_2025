(function () {
  //var width = 210;
  var width = window.innerWidth;
  var height = window.innerHeight;
  //var proportion = window.innerHeight / window.innerWidth;

  // var game = new Phaser.Game(
  //   width,
  //   Math.ceil(width * proportion),
  //   Phaser.CANVAS,
  //   "gamer-container"
  // );
  var game = new Phaser.Game(width, height, Phaser.CANVAS, "game-container");
  // Força recriação do contexto com flag 'willReadFrequently'
  if (game.renderer && game.renderer.context) {
    var oldCanvas = game.renderer.canvas;
    var ctx = oldCanvas.getContext("2d", { willReadFrequently: true });
    if (ctx) {
      game.renderer.context = ctx;
    }
  }
  window.addEventListener("resize", function () {
    game.scale.setGameSize(window.innerWidth, window.innerHeight);
  });

  game.state.add("Boot", Boot);
  game.state.start("Boot");
})();
