// var MovingObject = require("./moving_object");
// var Util = require("./util");
// var Bullet = require("./bullet");

function randomColor() {
  var hexDigits = "0123456789ABCDEF";

  var color = "#";
  for (var i = 0; i < 3; i ++) {
    color += hexDigits[Math.floor((Math.random() * 16))];
  }

  return color;
}

var Ship = function (options) {
  options.radius = Ship.RADIUS;
  options.vel = options.vel || [0, 0];
  options.color = options.color || randomColor();

  MovingObject.call(this, options);
};

Ship.RADIUS = 15;

Util.inherits(Ship, MovingObject);

Ship.prototype.fireBullet = function () {
  var norm = Util.norm(this.vel);

  if (norm == 0) {
    // Can't fire unless moving.
    return;
  }

  var relVel = Util.scale(
    Util.dir(this.vel),
    Bullet.SPEED
  );

  var bulletVel = [
    relVel[0] + this.vel[0], relVel[1] + this.vel[1]
  ];

  var bullet = new Bullet({
    pos: this.pos,
    vel: bulletVel,
    color: this.color,
    game: this.game
  });

  this.game.add(bullet);
};

Ship.prototype.power = function (impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};

Ship.prototype.relocate = function () {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
};

// module.exports = Ship;
