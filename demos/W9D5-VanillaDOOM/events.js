const alertTextContent = function alertTextContent(e) {
    console.log('this', this);
    e.stopPropagation();
    console.log(`the target is: ${e.target.className}`);
    console.log(`the current target is: ${e.currentTarget.className}`);
};

const sayYo = function(e) {
    e.stopPropagation();
    console.log('yo');
}

const inners = document.querySelectorAll('.nested-inner'); // returns a node list
// const inners = document.getElementsByClassName('nested-inner');
const middle = document.querySelector('#MID'); // returns a single element (the first)

const outer = document.getElementById('OUT');

// inners.forEach((el) => {
//     el.addEventListener('click', alertTextContent);
// });

// middle.addEventListener('click', alertTextContent);
middle.addEventListener('click', sayYo);

outer.addEventListener('click', alertTextContent);