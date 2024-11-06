const tableau = [];

const generateColor = () => {
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.getElementById('code').innerText = "#" + randomColor;
    document.getElementById('code').style.color = "#" + randomColor;
    tableau.push(randomColor);
}

generateColor();

var count = 0;
var x = 0;

const color = () => {
    if (count >= 0) {
        document.getElementById('count').style.color = 'green';
    }
    else {
        document.getElementById('count').style.color = 'red';
    }
}

const plus = () => {
    count = tableau.length;
    color();
    generateColor();
    document.body.style.backgroundColor = '#' + tableau[count];
    document.getElementById('code').style.color = "#" + tableau[count];
    document.getElementById('count').innerText = count;
}

const ctrlz = () => {
    count--;
    if ((count < 0) || (count > (tableau.length - 1))) {
        count++;
        alert("Il n'y en a pas d'autre")
    }
    else {
        color();
        document.body.style.backgroundColor = '#' + tableau[count];
        document.getElementById('code').style.color = "#" + tableau[count];
        document.getElementById('count').innerText = count;
    }
}

const ctrly = () => {
    count++;
    if ((count < 0) || (count > (tableau.length - 1))) {
        count--;
        alert("Il n'y en a pas d'autre")
    }
    else {
        color();
        document.body.style.backgroundColor = '#' + tableau[count];
        document.getElementById('code').style.color = "#" + tableau[count];
        document.getElementById('count').innerText = count;
    }
}