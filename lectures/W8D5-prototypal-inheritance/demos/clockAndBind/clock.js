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

    // 4. Schedule the tick at 1 second intervals.
    console.log(this);
    // Minh and David's alternative solution
    // const that = this;
    // setInterval(function() {that._tick()}, 1000);

    setInterval(this._tick.bind(this), 1000)
  }

  printTime() {
    // console.clear()
    // Format the time in HH:MM:SS
    let hours = `${this.hours}`.padStart(2, '0');
    let minutes = `${this.minutes}`.padStart(2, '0');
    let seconds = `${this.seconds}`.padStart(2, '0');

    const timeString = [hours, minutes, seconds].join(":");

    // Use console.log to print it.
    console.log(timeString);
  }

  _tick() {
    console.log(this)
    // 1. Increment the time by one second.
    this._incrementSeconds();

    // 2. Call printTime.
    this.printTime();
  }

  _incrementSeconds() {
    // 1. Increment the time by one second.
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._incrementMinutes();
    }
  }

  _incrementMinutes() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this._incrementHours();
    }
  }

  _incrementHours() {
    this.hours = (this.hours + 1) % 24;
  }
}

const clock = new Clock();
