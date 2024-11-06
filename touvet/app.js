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
})*/

window.onresize = function () {
    if (window.innerWidth <= 1070) {
        document.getElementById("navbar").style.background = "";
        document.getElementById("navbar").style.transition = "0.2s ease";
        document.getElementById("navbar").style.borderRadius = "0";
        document.getElementById("navbar").style.marginTop = "";
        document.getElementById("navbar").style.marginLeft = "";
        document.getElementById("navbar").style.width = "";
        document.getElementById("logo").style.marginTop = "0.8rem";
    }
    else if (document.documentElement.scrollTop > 0 && window.innerWidth > 1070) {
        document.getElementById("navbar").style.background = "white";
        document.getElementById("navbar").style.transition = "0.2s ease";
        document.getElementById("navbar").style.borderRadius = "2rem";
        document.getElementById("navbar").style.marginTop = "1rem";
        document.getElementById("navbar").style.marginLeft = "2.5%";
        document.getElementById("navbar").style.width = "95%";
        document.getElementById("logo").style.marginTop = "-0.3rem";
    }

    if (window.innerWidth <= 1070) {
        document.querySelector(".gauche").style.position = "";
        document.querySelector(".gauche").style.marginTop = "0";
        document.querySelector(".droite").style.marginLeft = "0";
    }

    else if (document.documentElement.scrollTop > 0 && window.innerWidth > 1070) {
        document.querySelector(".gauche").style.position = "fixed";
        document.querySelector(".gauche").style.marginTop = "-22rem";
        document.querySelector(".droite").style.marginLeft = "20rem";
    }
};

window.onscroll = function () {

    if (document.documentElement.scrollTop > 0 && window.innerWidth > 1070) {
        document.getElementById("navbar").style.background = "white";
        document.getElementById("navbar").style.transition = "0.2s ease";
        document.getElementById("navbar").style.borderRadius = "2rem";
        document.getElementById("navbar").style.marginTop = "1rem";
        document.getElementById("navbar").style.marginLeft = "2.5%";
        document.getElementById("navbar").style.width = "95%";
        document.getElementById("logo").style.marginTop = "-0.3rem";
    }
    else {
        document.getElementById("navbar").style.background = "";
        document.getElementById("navbar").style.transition = "0.2s ease";
        document.getElementById("navbar").style.borderRadius = "0";
        document.getElementById("navbar").style.marginTop = "";
        document.getElementById("navbar").style.marginLeft = "";
        document.getElementById("navbar").style.width = "";
        document.getElementById("logo").style.marginTop = "0.8rem";
    }

    if (document.documentElement.scrollTop > 350 && window.innerWidth > 1070) {
        document.querySelector(".gauche").style.position = "fixed";
        document.querySelector(".gauche").style.marginTop = "-22rem";
        document.querySelector(".droite").style.marginLeft = "20rem";
    }
    else {
        document.querySelector(".gauche").style.position = "";
        document.querySelector(".gauche").style.marginTop = "0";
        document.querySelector(".droite").style.marginLeft = "0";
    }
};

var sidenav = document.getElementById("navbar");
var openBtn = document.getElementById("openBtn");
var claseBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

// Set the width of the side navigation to 10rem
function openNav() {
    sidenav.classList.add("active");
}

// Set the width of the side navigation to 0
function closeNav() {
    sidenav.classList.remove("active");
}




















/*
window.width = function (){
    if(document.documentElement.clientWidth > 1200) {
        
    }
    else {
        
    }
}*/