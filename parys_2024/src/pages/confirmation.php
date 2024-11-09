<?php

$mail = $_POST["mail"]; //se recup obligatoirement avec le name dans le html
$prenom = $_POST["prenom"];
$nom = $_POST["nom"];
$mdp = $_POST["password"];
$repmdp = $_POST["password2"];

if ($mdp == $repmdp)
{
    echo("le mot de passe est le meme");
}
else
{
    echo("le mot de passe n'est pas le meme");
}

?>

<!DOCTYPE html>
<html lang="Fr-fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,600;1,300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="style.css">
    <title>Espace Client</title>
</head>
<body>
    <h1>Merci <?php echo($prenom. " ". $nom)?> pour votre inscription !</h1>
    <h2>Vous allez recevoir un mail de confirmation sur l'adresse <?php echo($mail)?>.</h2>
    
</body>
</html>