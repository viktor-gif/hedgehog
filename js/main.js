console.log(window.innerWidth);
console.log(window.innerHeight);

let hedg = document.getElementById('hedgehog');

setTimeout(() => {
    const hedgWait = document.querySelector('.hedgehog__wait');
    hedgWait.classList.add('hedgehog__wait_remove');
}, 4000);

function animateHedg() {
    hedg.animate([
        {
            top: (Math.random() * (window.innerHeight + 200) - 200) + 'px',
            left: '-300px'
        },
        {
            top: (Math.random() * (window.innerHeight + 200) - 200) + 'px',
            left: window.innerWidth + 'px'
        }
    ], {
        duration: Math.random() * 2000 + 2000,
        iterations: 1,
        delay: 3000

    })
}
// animateHedg();

setInterval(() => {animateHedg()}, Math.random() * 3000 + 4000);