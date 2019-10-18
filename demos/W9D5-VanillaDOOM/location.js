const rootEl = document.getElementById('root');

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

window.addEventListener('hashchange', (e) =>{
    switch(window.location.hash){
        case "#fast":
            rootEl.innerHTML = fast;
            debugger
            break;
        case "#slow":
            rootEl.innerHTML = slow;
            break;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    window.location.hash = 'nah';
    const fastLink = document.getElementById('fast');

    fastLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = 'fast';
    });

    const slowLink = document.getElementById('slow');

    slowLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = 'slow';
    });
});

    