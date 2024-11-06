/*Romain Poisson - Tout droit réservé*/

window.onscroll = function () {

    if(document.documentElement.scrollTop > 0) {
        document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0.95)";
        document.getElementById("navbar").style.transition = "0.2s ease";
        document.getElementById("navbar").style.borderRadius = "3rem";
        document.getElementById("navbar").style.marginTop = "1rem";
        document.getElementById("navbar").style.marginLeft = "2.5%";
        document.getElementById("navbar").style.width = "95%";
        document.getElementById("maison").src = "src/assets/icons/maison.svg";
        document.getElementById("logo").style.marginLeft = "-2.5%";
        function changeColor() {
            document.querySelectorAll(".navjs").forEach(el => {
                el.style.color = "black";
            });
        }
        changeColor();
    }
    else {
        document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0)";
        document.getElementById("navbar").style.transition = "0.2s ease";
        document.getElementById("navbar").style.marginTop = "0";
        document.getElementById("navbar").style.marginLeft = "0";
        document.getElementById("navbar").style.width = "100%";
        document.getElementById("maison").src = "src/assets/icons/maisonblanche.svg";
        document.getElementById("logo").style.marginLeft = "0";
        function changeColor2() {
            document.querySelectorAll(".navjs").forEach(el => {
                el.style.color = "white";
            });
        }
        changeColor2();
    }
};


let screenLogGauche = document.getElementById("menugauche");
document.addEventListener("mousemove", logKeyGauche);

function logKeyGauche(e) {
    if(window.innerWidth <= 815){
        if((e.clientX < (window.innerWidth/8) || document.getElementById("menugauche").classList.contains("active")) && e.clientY > 90) {
            if((e.clientX < ((window.innerWidth/10)*8)) && e.clientY > 90){
                document.getElementById("menugauche").classList.add("active");
                document.getElementById("menudroite").style.right = "-30%";
                document.getElementById("menudroite").style.visibility = "hidden";
                document.getElementById("menudroite").style.opacity = "0";
                document.getElementById("menudroite").style.transition = "0.3s ease";
                document.getElementById("menudroite").classList.remove("active");
            }
            if((e.clientX > ((window.innerWidth/10)*8)) || e.clientY < 90){
                document.getElementById("menugauche").style.left = "-30%";
                document.getElementById("menugauche").style.visibility = "hidden";
                document.getElementById("menugauche").style.opacity = "0";
                document.getElementById("menugauche").style.transition = "0.2s ease";
                document.getElementById("menugauche").classList.remove("active");
            }
            document.getElementById("menugauche").style.left = "0";
            document.getElementById("menugauche").style.visibility = "visible";
            document.getElementById("menugauche").style.opacity = "1";
            document.getElementById("menugauche").style.transition = "0.2s ease";
        }
        else{
            document.getElementById("menugauche").style.left = "-30%";
            document.getElementById("menugauche").style.visibility = "hidden";
            document.getElementById("menugauche").style.opacity = "0";
            document.getElementById("menugauche").style.transition = "0.2s ease";
            document.getElementById("menugauche").classList.remove("active");
        }
    }
    else{
        if((e.clientX < (window.innerWidth/10) || document.getElementById("menugauche").classList.contains("active")) && e.clientY > 90) {
            if((e.clientX < (window.innerWidth/2)) && e.clientY > 90){
                document.getElementById("menugauche").classList.add("active");
            }
            if((e.clientX > (window.innerWidth/2)) || e.clientY < 90){
                document.getElementById("menugauche").classList.remove("active");
            }
            document.getElementById("menugauche").style.left = "0";
            document.getElementById("menugauche").style.visibility = "visible";
            document.getElementById("menugauche").style.opacity = "1";
            document.getElementById("menugauche").style.transition = "0.2s ease";
        }
        else{
            document.getElementById("menugauche").style.left = "-30%";
            document.getElementById("menugauche").style.visibility = "hidden";
            document.getElementById("menugauche").style.opacity = "0";
            document.getElementById("menugauche").style.transition = "0.2s ease";
            document.getElementById("menugauche").classList.remove("active");
        }
    }
}

const idGauche = "menugauche";
// Écoute les clics sur le document
document.addEventListener("touchstart", fermerGauche);

function fermerGauche(event) {
    const element = document.getElementById(idGauche);
    
    // Vérifie si l'élément existe et si le clic n'est pas sur cet élément
    if (element && !element.contains(event.target)) {
        document.getElementById("menugauche").style.left = "-30%";
        document.getElementById("menugauche").style.visibility = "hidden";
        document.getElementById("menugauche").style.opacity = "0";
        document.getElementById("menugauche").style.transition = "0.2s ease";
        document.getElementById("menugauche").classList.remove("active");
    }
}

if(document.getElementById("menugauche").classList.contains("active")){
    alert("active")
}


//document.addEventListener("click", fermerGaucheClick);

// function fermerGaucheClick(event) {
//     if(document.getElementById("menugauche").style.visibility = "hidden") {
//         const element = document.getElementById(idGauche);
    
//         // Vérifie si l'élément existe et si le clic n'est pas sur cet élément
//         if (element && !element.contains(event.target)) {
//             document.getElementById("menugauche").style.marginLeft = "-30%";
//             document.getElementById("menugauche").style.visibility = "hidden";
//             document.getElementById("menugauche").style.opacity = "0";
//             document.getElementById("menugauche").style.transition = "0.2s ease";
//             document.getElementById("menugauche").classList.remove("active");
//         }
//     }
// }


let screenLogDroite = document.getElementById("menudroite");
document.addEventListener("mousemove", logKeyDroite);

function logKeyDroite(e) {
    if(window.innerWidth <= 815){
        if((e.clientX > ((window.innerWidth/8)*7) || document.getElementById("menudroite").classList.contains("active")) && e.clientY > 90) {
            if((e.clientX > ((window.innerWidth/10)*8)) && e.clientY > 90){
                document.getElementById("menudroite").classList.add("active");
                document.getElementById("menugauche").style.left = "-30%";
                document.getElementById("menugauche").style.visibility = "hidden";
                document.getElementById("menugauche").style.opacity = "0";
                document.getElementById("menugauche").style.transition = "0.2s ease";
                document.getElementById("menugauche").classList.remove("active");
            }
            if((e.clientX < ((window.innerWidth/10)*1.5)) || e.clientY < 90){
                document.getElementById("menudroite").style.right = "-30%";
                document.getElementById("menudroite").style.visibility = "hidden";
                document.getElementById("menudroite").style.opacity = "0";
                document.getElementById("menudroite").style.transition = "0.3s ease";
                document.getElementById("menudroite").classList.remove("active");
            }
            document.getElementById("menudroite").style.right = "0";
            document.getElementById("menudroite").style.visibility = "visible";
            document.getElementById("menudroite").style.opacity = "1";
            document.getElementById("menudroite").style.transition = "0.2s ease";
        }
        else{
            document.getElementById("menudroite").style.right = "-30%";
            document.getElementById("menudroite").style.visibility = "hidden";
            document.getElementById("menudroite").style.opacity = "0";
            document.getElementById("menudroite").style.transition = "0.3s ease";
            document.getElementById("menudroite").classList.remove("active");
        }
    }
    else{
        if((e.clientX > (((window.innerWidth/10)*9)) || document.getElementById("menudroite").classList.contains("active")) && e.clientY > 90) {
            if((e.clientX > (window.innerWidth/2)) && e.clientY > 90){
                document.getElementById("menudroite").classList.add("active");
            }
            else if((e.clientX < (window.innerWidth/2)) || e.clientY < 90){
                document.getElementById("menudroite").classList.remove("active");
            }
            document.getElementById("menudroite").style.right = "0";
            document.getElementById("menudroite").style.visibility = "visible";
            document.getElementById("menudroite").style.opacity = "1";
            document.getElementById("menudroite").style.transition = "0.3s ease";
        }
        else{
            document.getElementById("menudroite").style.right = "-30%";
            document.getElementById("menudroite").style.visibility = "hidden";
            document.getElementById("menudroite").style.opacity = "0";
            document.getElementById("menudroite").style.transition = "0.3s ease";
            document.getElementById("menudroite").classList.remove("active");
        }
    }
}

const idDroite = "menudroite";
// Écoute les clics sur le document
document.addEventListener("touchstart", fermerDroite);

function fermerDroite(event) {
    const element = document.getElementById(idDroite);
    
    // Vérifie si l'élément existe et si le clic n'est pas sur cet élément
    if (element && !element.contains(event.target)) {
        document.getElementById("menudroite").style.right = "-30%";
        document.getElementById("menudroite").style.visibility = "hidden";
        document.getElementById("menudroite").style.opacity = "0";
        document.getElementById("menudroite").style.transition = "0.3s ease";
        document.getElementById("menudroite").classList.remove("active");
    }
}

// document.addEventListener("click", fermerDroiteClick);


let screenLogNav = document.getElementById("navbar");
document.addEventListener("mousemove", logKeyNav);

function logKeyNav() {
    if(document.getElementById("menugauche").classList.contains("active")){
        document.getElementById("navbar").style.transition = "0.2s ease";
        document.getElementById("navbar").style.visibility = "hidden";
        document.getElementById("navbar").style.opacity = "0";
    }
    else if(document.getElementById("menudroite").classList.contains("active")){
        document.getElementById("navbar").style.transition = "0.2s ease";
        document.getElementById("navbar").style.visibility = "hidden";
        document.getElementById("navbar").style.opacity = "0";
        document.getElementById("menudroite").style.right = "0";
    }
    else{
        document.getElementById("navbar").style.transition = "0.2s ease";
        document.getElementById("navbar").style.visibility = "visible";
        document.getElementById("navbar").style.opacity = "1";
    }
}


let screenLogJordan = document.getElementById("jordan");
document.addEventListener("mousemove", logKeyJordan);

function logKeyJordan(e) {
    if((e.clientX < (window.innerWidth/10) || document.getElementById("menugauche").classList.contains("active")) && e.clientY > 90) {
        document.getElementById("jordan").src = "src/assets/images/profilgauche.png";
    }
    else if ((e.clientX > ((window.innerWidth/10)*9) || document.getElementById("menudroite").classList.contains("active")) && e.clientY > 90) {
        document.getElementById("jordan").src = "src/assets/images/profildroit.png";
    }
    else{
        document.getElementById("jordan").src = "src/assets/images/face.png";
    }
}


var btn = document.getElementById("plus");
btn.addEventListener("click", updateBtn);
var btn2 = document.getElementById("moins");
btn2.addEventListener("click", updateBtn2);

function updateBtn() {
  if(document.getElementById("explications").style.visibility = "hidden") {
    document.getElementById("explications").style.visibility = "visible";
    document.getElementById("explications").style.opacity = "1";
    document.getElementById("plus").style.visibility = "hidden";
    document.getElementById("moins").style.visibility = "visible";
  }
}

function updateBtn2() {
    if(document.getElementById("explications").style.visibility = "visible") {
      document.getElementById("explications").style.visibility = "hidden";
      document.getElementById("explications").style.opacity = "0";
      document.getElementById("plus").style.visibility = "visible";
      document.getElementById("moins").style.visibility = "hidden";
    }
  }

/*Romain Poisson - Tout droit réservé*/