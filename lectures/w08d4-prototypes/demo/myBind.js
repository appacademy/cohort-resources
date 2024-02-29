Function.prototype.myBind = function(ctx, ...bindArgs) {
  let that = this; // `this` will be equal to a specific function
  return function(...callArgs) {
    that.apply(ctx, bindArgs.concat(callArgs))
  }
};

class Clock {
  constructor() {
    let now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();

    this.printTime();
    setInterval(this._tick.myBind(this), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.printTime();
    
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours += 1;
        if (this.hours === 24) {
          this.hours = 0;
        }
      }
    }
  }
}