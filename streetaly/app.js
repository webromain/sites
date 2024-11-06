/*const ratio = 0.1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})

window.onscroll = function () {

    if(document.documentElement.scrollTop > 10) {
        document.getElementById("navbar").style.background = "black";
        document.getElementById("navbar").style.transition = "0.2s ease";
        document.getElementById("navbar").style.position = "fixed";
    }
    else {
        document.getElementById("navbar").style.background = "";
        document.getElementById("navbar").style.position = "relative";
    }
};
*/