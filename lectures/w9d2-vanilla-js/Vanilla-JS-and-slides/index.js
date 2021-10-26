const squareElement = document.getElementById("square");
// Returns HTML ELEMENT of the given Id
// console.log(squareElement)

squareElement.addEventListener("click", () => {
    squareElement.style.backgroundColor = "red"
})

squareElement.style.backgroundColor = "blue"

const circleCollection = document.getElementsByClassName("circles");
// return a collection of HTML Elements w/ given class, cannot use for each on collection
// console.log(circleCollection)

for (let i = 0; i < circleCollection.length; i++) {
    circleCollection[i].style.backgroundColor = "pink"
}

// const firstCircle = document.querySelector(".circles");
// selectos take css selectors as arguments

// firstCircle.style.backgroundColor = "blue"


const circleNL = document.querySelectorAll(".circles");
// w this we can use for each on Node list collection.
circleNL.forEach(child => child.classList.add("red"))