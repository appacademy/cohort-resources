let fast = `
    <div><h1>fast</h1><img src='fast.jpg' width=500></div>
`;

let slow = `
    <div><h1>slow</h1><img src='slow.jpg' width=500></div>
`;

window.addEventListener('hashchange', (e) => {
    let rootEl = document.getElementById('root');
    switch (window.location.hash) {
        case '#fast':
            rootEl.innerHTML = fast;
            break;
        case '#slow':
            rootEl.innerHTML = slow;
            break;
        default:
            rootEl.innerHTML = 'NAAAAH';
            break;
    }
})


// window.addEventListener('load', (e) => {
//     console.log('reloaded');
// })