console.log("JS connected!");

const menuBtn = document.getElementById("menu_btn");
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
})

const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll',()=>{
    if(window.scrollY>300){
        backToTopBtn.classList.add('show');
    }
    else{
        backToTopBtn.classList.remove('show')
    }
});

backToTopBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

function animateCounter(target, duration) {
    const counter = document.getElementById('counter');
    let start = 0;
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easedProgress = 1 - Math.pow(1 - progress, 3); 
        const current = Math.floor(target * easedProgress);

        counter.textContent = current.toLocaleString();

        if (frame >= totalFrames) {
            counter.textContent = target.toLocaleString();
            clearInterval(timer);

            // Add shine
            counter.classList.add('shine');
            setTimeout(() => counter.classList.remove('shine'), 1000);
        }
    }, 1000 / frameRate);
}

const openAccountSection = document.querySelector('.open-account');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            animateCounter(3500000, 2000);
            observer.unobserve(openAccountSection);
        }
    });
}, { threshold: 0.3 });

observer.observe(openAccountSection);
