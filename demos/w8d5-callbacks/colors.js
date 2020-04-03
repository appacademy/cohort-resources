const colors = document.getElementById('colors');

setInterval(() => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    colors.style.backgroundColor = '#' + randomColor;
}, 1500);
