/*NAV*/
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
/*NAV*/