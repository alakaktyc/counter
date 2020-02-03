//count
let show = true;
function showVisible() {
    if(!show) return false;
    let element = document.querySelector('.elements');
    let coords = element.getBoundingClientRect();
    let windowHeight = document.documentElement.clientHeight;

    let start;
    const el = document.querySelectorAll('.count');
    for (let i = 0; i < el.length; i++){
        const final = parseInt(el[i].textContent, 10);
        const duration = 1000;

        const step = ts => {
            if (!start) {
                start = ts
            }
            let progress = (ts - start) / duration;

            el[i].textContent = Math.floor(progress * final);
            if (progress < 1) {
                requestAnimationFrame(step)
            }
        };
        if (coords.top > 0 && coords.top < windowHeight){
            requestAnimationFrame(step);
            show = false;
        }
    }
}
window.addEventListener('scroll', showVisible);