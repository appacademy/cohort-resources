export class Ball {
  constructor() {
    console.log('building a new ball');
    console.log('hello');
  }
};

export class Bullet extends Ball {
  constructor() {
    super();
  }
};

// ES5
// module.exports = { Ball, Bullet };
// 

// ES6
export default Bullet;
//