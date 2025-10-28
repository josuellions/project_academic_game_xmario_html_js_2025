var Boot = function (game) {};

Boot.prototype = {
  init: function () {
    //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.forceOrientation(true, false);
    //this.scale.forceOrientation(false, true);
    this.scale.updateLayout(true);
    this.scale.refresh();

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    this.input.maxPointers = 1;
    this.input.addPointer();
  },
  create: function () {},
};
