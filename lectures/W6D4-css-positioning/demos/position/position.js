

document.addEventListener("DOMContentLoaded", () => {
  const customizer = document.getElementById("customizer");

  const top = customizer.querySelector(".top");
  const right = customizer.querySelector(".right");
  const bottom = customizer.querySelector(".bottom");
  const left = customizer.querySelector(".left");
  const select = customizer.querySelector(".position-select");

  window.customizerStyle = {
    position: "static",
    top: "",
    right: "",
    bottom: "",
    left: ""
  };

  window.data = {
    top: '',
    right: '',
    bottom: '',
    left: ''
  };

  addChangeListeners(customizer, select, top, right, bottom, left);


});

const addChangeListeners = (customizer, ...elements) => {
  elements.forEach(el => {
    if (el.className === "position-select") {
      el.addEventListener("change", e => {
        handleSelect(customizer, el);
      });
    } else {
      el.addEventListener("input", e => {
        // console.log(e);
        handleKey(customizer, el, e);
      });
    }
  });
};

const handleKey = (customizer, el, e) => {
  const type = el.className;

  if (e.inputType === "deleteContentBackward") {
    window.data[type] = parseInt(window.data[type]) < 0 ? Math.ceil(parseInt(window.data[type] / 10)) : Math.floor(parseInt(window.data[type]) / 10);
    if (window.data[type] === 0) {
      window.customizerStyle[type] = "";
    } else {
      window.customizerStyle[type] = window.data[type] + 'px';
    }
  } else {
    if (window.data[type] == '0' || window.data[type] == 0) {
      window.customizerStyle[type] = parseInt(e.data) + 'px';
      window.data[type] = e.data;
    } else {
      window.customizerStyle[type] = window.data[type] + e.data + 'px';
      window.data[type] += e.data;
    }
    console.log(window.data[type])
      // window.data[type] += e.data;
  }

  const style = Object.keys(window.customizerStyle).map(key => `${key}: ${window.customizerStyle[key]}`).join(";");
  customizer.setAttribute("style", style);
};

const handleSelect = (customizer, el) => {
  window.customizerStyle.position = el.options[el.selectedIndex].value;

  if (window.customizerStyle.position === "static") {
    customizer.querySelectorAll("input").forEach (i => {
      i.setAttribute("style", "");
    });
    window.setAbsolute = false;
  } else if (!window.setAbsolute) {

    customizer.querySelectorAll("input").forEach (i => {
      i.setAttribute("style", "position: absolute");
    });
    window.setAbsolute = true;
  }
  const keys = Object.keys(window.customizerStyle);
  const style = keys.map(key => `${key}: ${window.customizerStyle[key]}`).join(";");
  customizer.setAttribute("style", style);
};
