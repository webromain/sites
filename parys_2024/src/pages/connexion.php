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
    <form>
        <h1>Connexion</h1>
        <div>
            <label for="nom">Nom<span class="rouge">*</span></label>
            <input type="text" name="nom" id="nom" required placeholder="Delacour" disabled>
        </div>
        <div>
            <label for="prenom">Prénom<span class="rouge">*</span></label>
            <input type="text" name="prenom" id="prenom" required placeholder="Jean" disabled>
        </div>
        <div>
            <label for="mail">E-mail<span class="rouge">*</span></label>
            <input type="email" name="mail" id="mail" required placeholder="exemple@messagerie.com" disabled>
        </div>
        <div>
            <input type="reset" value="Effacer" disabled>
            <input type="submit" disabled>
        </div>
    </form>

    <div class="inscon">
        <a href="inscription.php">Inscription</a>
    </div>
    
</body>
</html>