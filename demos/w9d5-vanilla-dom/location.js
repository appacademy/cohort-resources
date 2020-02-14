const fast = `
        <div>
        <h1> FAST! </h1>
        <img src="./fast.jpg" width=500>
        </div>
    `;

const slow = `
        <div>
        <h1> SLOW...! </h1>
        <img src="./slow.jpg" width=500>
        </div>
    `;

let rootEl = document.querySelector("#root");

window.addEventListener("hashchange",() => {
    switch (window.location.hash) {
        case "#fast":
            rootEl.innerHTML = fast;
            break;
        case "#slow":
            rootEl.innerHTML = slow;
            break;
        default:
            break;
    }
})