<!DOCTYPE html>
<html lang="Fr-fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,600;1,300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="../css/formulaire.css">
    <title>Connexion</title>
</head>
<body>
    <form method="post" action="confirmation.php">
        <h1>Inscription</h1>
        <div>
            <label for="civilite">Nom<span class="rouge">*</span></label>
            <input type="text" name="nom" id="nom" required placeholder="Delacour">
        </div>
        <div>
            <label for="civilite">Prénom<span class="rouge">*</span></label>
            <input type="text" name="prenom" id="prenom" required placeholder="Jean">
        </div>
        <div>
            <label for="sexe">Sexe<span class="rouge">*</span></label>
            <input type="radio" value="1" name="sexe" required> Homme
            <input type="radio" value="2" name="sexe" required> Femme
            <input type="radio" value="3" name="sexe" required> Autre
        </div>
        <div>
            <label for="mail">E-mail<span class="rouge">*</span></label>
            <input type="email" name="mail" id="mail" required placeholder="exemple@messagerie.com">
        </div>
        <div>
            <label for="password">Password<span class="rouge">*</span></label>
            <input type="password" name="password" id="password" required placeholder="Mot de passe">
        </div>
        <div>
            <label for="password2">Repeat Password<span class="rouge">*</span></label>
            <input type="password2" name="password2" id="password2" required placeholder="Répétez le mot de passe">
        </div>
        
        <div>
            <input type="reset" value="Effacer">
            <input type="submit" value="S'inscrire" class="animate__animated animate__pulse animate__infinite animate__slow">
        </div>
    </form>

    <div>
        <a href="connexion.php">Connexion</a>
    </div>
    
</body>
</html>