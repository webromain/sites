// if(!browser){
//     return
// }

/*NAV*/
// var sidenav = document.getElementByID("navi");
// var nav = document.getElementsByClassName("nav");

// sidenav.onclick = openNav;

// function openNav() {
//     if(nav.classList.contains("active") && (screen.width<=1200)) {
//         nav.classList.remove("active");
//     } else {
//         nav.classList.add("active");
//     }
// }
/*NAV*/

function toggleNav() {
  var navLinks = document.querySelector('.nav-links');
  var navBtn = document.getElementById('nav-btn');
  navLinks.classList.toggle('active');
  navBtn.classList.toggle('active');
}