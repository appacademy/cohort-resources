class Clock {
  constructor() {
    // 1. Create a Date object.
    const currentTime = new Date();

    // 2. Store the hour, minute, and second.
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();

    // 3. Call printTime.
    this.printTime();

    this._tick = this._tick.bind(this);
  
    // 4. Schedule the tick at 1 second intervals.
    // callbacks are always invoked function style - they take on the context of their environment when invoked
    
    //this.interval = setInterval(this._tick, 1000); //doesn't work because context ('this') becomes global inside _tick later b/c called function-style
    //setInterval(this._tick.bind(this), 1000); //binding this to _tick will force the context to be kept even when called function-style
    setInterval(() => this._tick(), 1000); //wrapping this._tick in an arrow function will also bind the context.  We do need to invoke this._tick b/c when the callback is invoked only the wrapping function will be invoked.
  }

  hello() {
    console.log('hello')
  }

  printTime() {
    // Format the time in HH:MM:SS
    //use String.prototype.padStart(targetLength, padString) to add zeroes to beginning if needed
    const timeArr = [this.hours, this.minutes, this.seconds];
    const timeString = timeArr.map(time => time.toString().padStart(2, '0')).join(":");

    // Use console.log to print it.
    console.log(timeString);
  }

  _tick() {
    // 1. Increment the time by one second.
    this._incrementSeconds();

    // 2. Call printTime.
    this.printTime();
  }

  _incrementSeconds() {
    // 1. Increment the time by one second and increment minute if applicable.
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._incrementMinutes();
    }
  }

  _incrementMinutes() {
    // 1. Increment the time by one minute and increment hour if applicable.
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this._incrementHours();
    }
  }

  _incrementHours() {
    // 1. Increment the hour by one and resets to 0 if reaches 24.
    this.hours = (this.hours + 1) % 24;
  }
}

const clock = new Clock();