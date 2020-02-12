// const Util = require("./util");
// const MovingObject = require("./moving_object");

const Bullet = function (options) {
  options.radius = Bullet.RADIUS;

  MovingObject.call(this, options);
};

Bullet.RADIUS = 2;
Bullet.SPEED = 15;

Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = false;

// module.exports = Bullet;
