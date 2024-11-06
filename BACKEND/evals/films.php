<?php

$dico = [
    [
        "lien"=>"https://musicart.xboxlive.com/7/90e05000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
        "titre"=>"Harry Potter 1",
        "realisateur"=>"Chris Columbus",
    ],
    [
        "lien"=>"https://musicart.xboxlive.com/7/0ce15000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
        "titre"=>"Harry Potter 2",
        "realisateur"=>"Chris Columbus",
    ],
    [
        "lien"=>"https://musicart.xboxlive.com/7/15e15000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
        "titre"=>"Harry Potter 3",
        "realisateur"=>"Alfonso Cuarón",
    ],
    [
        "lien"=>"https://musicart.xboxlive.com/7/1fe15000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
        "titre"=>"Harry Potter 4",
        "realisateur"=>"Mike Newell",
    ],
    [
        "lien"=>"https://musicart.xboxlive.com/7/26e15000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
        "titre"=>"Harry Potter 5",
        "realisateur"=>"David Yates",
    ],
    [
        "lien"=>"https://musicart.xboxlive.com/7/2fe15000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
        "titre"=>"Harry Potter 6",
        "realisateur"=>"David Yates",
    ],
    [
        "lien"=>"https://musicart.xboxlive.com/7/32e15000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
        "titre"=>"Harry Potter 7.1",
        "realisateur"=>"David Yates",
    ],
    [
        "lien"=>"https://musicart.xboxlive.com/7/3de15000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
        "titre"=>"Harry Potter 7.2",
        "realisateur"=>"David Yates",
    ],
];

echo("<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link rel=\"stylesheet\" href=\"stylefilms.css\"/>
    <title>Films</title>
</head>
<body>

    <h1>Films à l'affiche</h1>
    <div class=\"container\">");

foreach($dico as $valeur){
    echo("<div class='film'>
            <a href=\"". $valeur['lien']. "\">
            <img src=\"". $valeur['lien']. "\" alt=\"hp\"><br>
            <span>". $valeur['titre']. "</span><br>
            <span id=\"real\">". $valeur['realisateur']. "</span>
            </a>
        </div>");
}

echo("</div>
</body>
</html>");





?>