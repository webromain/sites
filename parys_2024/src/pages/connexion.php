<!DOCTYPE html>
<html lang="Fr-fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,600;1,300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="formulaire.css">
    <title>Connexion</title>
</head>
<body>
    <form method="post" action="prive.php">
        <h1>Connexion</h1>
        <div>
            <label for="mail">E-mail<span class="rouge">*</span></label>
            <input type="email" name="mail" id="mail" required placeholder="exemple@messagerie.com">
        </div>
        <div>
            <label for="password">Password<span class="rouge">*</span></label>
            <input type="password" name="password" id="password" required placeholder="Mot de passe">
        </div>
        <div>
            <input type="reset" value="Effacer">
            <input type="submit" value="Se connecter" class="animate__animated animate__pulse animate__infinite animate__slow">
        </div>
    </form>

    <div>
        <a href="inscription.php">Inscription</a>
        <a href="oubli.php">Mot de passe oublié</a>
    </div>
    
</body>
</html>