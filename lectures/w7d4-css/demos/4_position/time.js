document.addEventListener("DOMContentLoaded", () => {

  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  const timer = new Timer(
    minutes,
    seconds);

  const start = document.getElementById("start");
  const pause = document.getElementById("pause");
  const reset = document.getElementById("reset");

  start.addEventListener("click", e => {
    timer.start();
    disable(minutes, seconds);
  });

  pause.addEventListener("click", e => {
    timer.pause();
    enable(minutes, seconds);
  });

  reset.addEventListener("click", e => {
    timer.reset();
    enable(minutes, seconds);
  });
});

const enable = (...buttons) => {
  buttons.forEach(b => b.setAttribute("disabled", "false"));
};

const disable = (...buttons) => {
  buttons.forEach(b => b.setAttribute("disabled", "true"));
};

class Timer {

  constructor(minEl, secEl) {
    this.minEl = minEl;
    this.secEl = secEl;

    this.minutes = parseInt(this.minEl.getAttribute("value"));
    this.seconds = parseInt(this.secEl.getAttribute("value"));

    this.startMin = this.minutes;
    this.startSec = this.seconds;

  }

  start() {
    this.tick();
  }

  pause() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  reset() {
    this.pause();
    this.minEl.setAttribute("value", this.startMin < 10 ? "0" + this.startMin: this.startMin);
    this.secEl.setAttribute("value", this.startSec < 10 ? "0" + this.startSec : this.startSec);
    this.minutes = this.startMin;
    this.seconds = this.startSec;
  }

  tick() {
    this.interval = setInterval(() => {
      if (this.minutes == 0 && this.seconds == 0) {
        this.reset();
        alert("DONE");
      }
      this.render();
      this.countdown();
    }, 1000);
  }

  countdown() {
    if (this.seconds == 0) {
      this.seconds = 59;
      this.minutes -= 1;
    } else {
      this.seconds -= 1;
    }
  }

  render() {
    this.minEl.setAttribute("value", this.minutes < 10 ? "0" + this.minutes : this.minutes);
    console.log(this.seconds);
    this.secEl.setAttribute("value", this.seconds < 10 ? "0" + this.seconds : this.seconds);
  }
}