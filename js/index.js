let body = document.querySelector(`body`);
let header = document.querySelector(`.header`);
let icons = document.querySelector(`.icons`);
let light_icon = document.querySelector(`.light-dark i`);

icons.onclick = function() {
    header.classList.toggle("open");
}

light_icon.onclick = function() {
    body.classList.toggle("light");
}


// start statistic
let stat = document.querySelector(`.statistic`);
window.onscroll = function() {
    const sectionTop = stat.getBoundingClientRect().top + window.scrollY;
    const sectionBottom = sectionTop + stat.offsetHeight;
    const viewportBottom = window.innerHeight + window.scrollY;
    console.log(scrollY)
    if (sectionTop - 500 <= window.scrollY) {
        let statistic = document.querySelectorAll(`.statistic div h1 span`);
        intervals(1000, statistic[0], 20);
        intervals(100, statistic[1], 100);
        intervals(1000, statistic[2], 10);
        return;
    }
};

function intervals(time, element, to) {
    let value = 0.1;
    setInterval(() => {
        if (parseInt(element.innerHTML) >= to) {
            element.innerHTML = parseInt(element.innerHTML);
            return;
        }
        element.innerHTML = (parseFloat(element.innerHTML) + 0.1).toFixed(1);
    }, 500 / to);
}
// End statistic









var swiper = new Swiper(".slide-container", {
    slidesPerView: 'auto',
    spaceBetween: 60,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});