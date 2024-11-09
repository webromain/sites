const questions = [
  {
      texte: "Quel est l'âge du capitaine ?\n1. 42\n2. 101\n3. 18",
      reponse: 1,
  },
  {
      texte: "Quelle est la différence entre deux pigeons\n1. Waf\n2. Gluu\n3. La longueur des pattes",
      reponse: 3,
  },
  {
      texte: "Qu'est ce qui est jaune et qui attend ?\n1. Jonatan\n2. Homer Simpson\n3. Un citron pressé",
      reponse: 3,
  },
  {
      texte: "Comment s'appelle le monument le plus connu de Paris\n1. La tour eiffel\n2. La concorde\n3. La tour montparnasse",
      reponse: 1,
  }
];

function comptearebours() {
  let secondes = 10;

  let countdown = setInterval(function() {
    console.log(secondes);
    secondes--;
    if (secondes < 0) {
      clearInterval(countdown);
      console.log("Fin !");
    }
  }, 1000);
}

function application(){
  comptearebours();

  alert("Bienvenue sur ce quizz !");
  alert("Vous allez répondre à " + questions.length + " questions");

  let bonnesrep = 0;

  for (let i = 0; i < questions.length; i++) {
    let rep = prompt("Question " + (i+1) + " sur " + questions.length + "\n" + questions[i]["texte"]);
    if (rep == questions[i]["reponse"]) {
        bonnesrep += 1;
    }
  }

  alert("Résultat : " + bonnesrep + " bonnes réponses sur " + questions.length);
}

application();

//Romain Poisson B1C1
