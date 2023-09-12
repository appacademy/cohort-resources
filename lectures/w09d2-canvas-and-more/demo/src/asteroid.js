import MovingObject from "./movingObject";

class Asteroid extends MovingObject {
  constructor(size){
    super();
    this.size = size;
  }
}

export default Asteroid;