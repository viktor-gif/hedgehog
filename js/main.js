console.log(window.innerWidth);
console.log(window.innerHeight);

let hedg = document.getElementById('hedgehog');


function animateHedg() {
    hedg.animate([
        {
            top: Math.random() * window.innerHeight + 'px',
            left: '-300px'
        },
        {
            top: Math.random() * window.innerHeight + 'px',
            left: window.innerWidth + 'px'
        }
    ], {
        duration: Math.random() * 3000 + 2000,
        iterations: 1,
        delay: 3000

    })
}
// animateHedg();

setInterval(() => {animateHedg()}, Math.random() * 3000 + 5000);