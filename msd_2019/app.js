const ratio = 0.1
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

    if(document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.background = "white";
        document.getElementById("navbar").style.color = "black";
        document.getElementById("navbar").style.transition = "0.2s ease";
        document.getElementById("navbar").style.height = "10vh";
        document.getElementById("navbar").style.top = "-0.5vh";
        document.getElementById("logomsd").style.height = "9vh";
        document.getElementById("logomsd").style.top = "5px";
        document.getElementById("logoviti").style.height = "5.5vh";
        document.getElementById("listeun").style.marginTop = "-0.9vh";
    }
    else {
        document.getElementById("navbar").style.background = "";
        document.getElementById("navbar").style.color = "white";
        document.getElementById("navbar").style.height = "13vh";
        document.getElementById("navbar").style.top = "0vh";
        document.getElementById("logomsd").style.height = "10vh";
        document.getElementById("logomsd").style.top = "10px";
        document.getElementById("logoviti").style.height = "6.5vh";
        document.getElementById("listeun").style.marginTop = "0vh";
    }
};

