const containercontent = document.querySelectorAll('.card');
containercontent.forEach(el => {

    el.addEventListener('click', () => {
        el.classList.toggle('flipped')
    })

    el.addEventListener('mousemove' || 'touchmove', e => {

        let elRect = el.getBoundingClientRect();

        let x = e.clientX - elRect.x;
        let y = e.clientY - elRect.y;

        let midCardWidth = elRect.width / 2;
        let midCardHeight = elRect.height / 2;

        let angleY = -(x - midCardWidth) / 8;
        let angleX = (y - midCardHeight) / 8;

        let glowX = x / elRect.width * 100;
        let glowY = y / elRect.height * 100;

        el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(193, 206, 215), transparent);`;
        el.children[1].style.transition = '0.1s';
        el.children[1].style.transitionDelay = '0s';

    });

    el.addEventListener('mouseleave' || 'touchmove', () => {
        el.children[1].style.transform = 'rotateX(0) rotateY(0)';
        el.children[1].style.transitionDelay = '1s';
    });
})


const card = document.querySelectorAll('.front-card');

card.forEach(el => {

    el.addEventListener('mousemove' || 'touchmove', e => {

        let elRect = el.getBoundingClientRect();

        let x = e.clientX - elRect.x;
        let y = e.clientY - elRect.y;

        let midCardWidth = elRect.width / 2;
        let midCardHeight = elRect.height / 2;

        let angleY = -(x - midCardWidth) / 8;
        let angleX = (y - midCardHeight) / 8;

        let glowX = x / elRect.width * 100;
        let glowY = y / elRect.height * 100;

        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(193, 206, 215), transparent);`;
        el.children[0].style.boxShadow = '0px 0px 10px 4px #FFE165';
        el.children[1].style.setProperty('--mouseX', glowX + '%');
        el.children[1].style.setProperty('--mouseY', glowY + '%');
        el.children[1].style.opacity = '0.8';
        el.children[0].style.transitionDelay = '0s';
        el.children[1].style.transitionDelay = '0s';
        /*document.querySelectorAll('.holo').style.opacity = '0.5 !important';*/
    });

    el.addEventListener('mouseleave' || 'touchleave', () => {
        el.children[0].style.boxShadow = '0px 0px 10px 4px black';
        el.children[0].style.transform = 'rotateX(0) rotateY(0)';
        el.children[1].style.transform = 'rotateX(0) rotateY(0)';
        el.children[1].style.opacity = '0.2';
        el.children[0].style.transitionDelay = '1s';
        el.children[1].style.transitionDelay = '1s';
    });

    // el.addEventListener('touchmove', e => {

    //     let elRect = el.getBoundingClientRect();

    //     let x = e.clientX - elRect.x;
    //     let y = e.clientY - elRect.y;

    //     let midCardWidth = elRect.width / 2;
    //     let midCardHeight = elRect.height / 2;

    //     let angleY = -(x - midCardWidth) / 8;
    //     let angleX = (y - midCardHeight) / 8;

    //     let glowX = x / elRect.width * 100;
    //     let glowY = y / elRect.height * 100;

    //     el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    //     el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    //     el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(193, 206, 215), transparent);`;
    //     el.children[0].style.boxShadow = '0px 0px 10px 4px #FFE165';
    //     el.children[1].style.setProperty('--mouseX', glowX + '%');
    //     el.children[1].style.setProperty('--mouseY', glowY + '%');
    //     el.children[1].style.opacity = '0.8';
    //     el.children[0].style.transitionDelay = '0s';
    //     el.children[1].style.transitionDelay = '0s';
    //     /*document.querySelectorAll('.holo').style.opacity = '0.5 !important';*/
    // });

    // el.addEventListener('touchleave', () => {
    //     el.children[0].style.boxShadow = '0px 0px 10px 4px black';
    //     el.children[0].style.transform = 'rotateX(0) rotateY(0)';
    //     el.children[1].style.transform = 'rotateX(0) rotateY(0)';
    //     el.children[1].style.opacity = '0.2';
    //     el.children[0].style.transitionDelay = '1s';
    //     el.children[1].style.transitionDelay = '1s';
    // });

});
