<?php

echo("<h2 style='margin-left: 50px;'><U><strong>EXERCICE 1 :</strong></U></h2>");

//1
$dico = [
    [
        "nom"=>"Chat",
        "poids"=>5,
        "longevite"=>20,
        "continent"=>"Europe"
    ],
    [
        "nom"=>"Chien",
        "poids"=>8,
        "longevite"=>22,
        "continent"=>"Europe"
    ],
    [
        "nom"=>"Elephant",
        "poids"=>2000,
        "longevite"=>50,
        "continent"=>"Asie"
    ],
    [
        "nom"=>"Rinoceros",
        "poids"=>1500,
        "longevite"=>40,
        "continent"=>"Afrique"
    ],
    [
        "nom"=>"Bonobo",
        "poids"=>44,
        "longevite"=>41,
        "continent"=>"Afrique"
    ]
];


if($dico[0]["poids"]+$dico[1]["poids"]+$dico[2]["poids"]+$dico[3]["poids"]+$dico[4]["poids"]>3000)
{
    echo("<p>Surpoids</p>");
}

for($i=0; $i<count($dico); $i++)
{
    if($dico[$i]["continent"]=="Europe")
    {
        echo("<I><p>L'animal ". $dico[$i]["nom"]. ", originaire du continent ". $dico[$i]["continent"]. ", pèse ". $dico[$i]["poids"]. " kgs et vit ". $dico[$i]["longevite"]. " ans.</I>");
    }
    elseif($dico[$i]["longevite"]>30)
    {
        echo("<p>L'animal ". $dico[$i]["nom"]. ", originaire du continent ". $dico[$i]["continent"]. ", pèse ". $dico[$i]["poids"]. " kgs et vit <font color='red'>". $dico[$i]["longevite"]. " ans</font>.");
    }
    else
    {
        echo("<p>L'animal ". $dico[$i]["nom"]. ", originaire du continent ". $dico[$i]["continent"]. ", pèse ". $dico[$i]["poids"]. " kgs et vit ". $dico[$i]["longevite"]. " ans.");
    }
}


echo("<br /><br /><br />");
echo("<h2 style='margin-left: 50px;'><U><strong>EXERCICE 2 :</strong></U></h2>");

//2
$nom="aspirateur";
$neuf=FALSE;
$prix=52;
$dico2 = ["a", "e", "i", "o", "u", "y"];

echo($neuf==TRUE AND $prix<=30); //FALSE
echo($neuf==FALSE OR ($prix>=50 AND $prix<=100)); //TRUE -> 1
echo($nom==strtoupper($nom) XOR $nom==strtolower($nom)); //TRUE -> 1
echo($nom[0]!="e" AND $nom[strlen($nom)-1]!="e"); //TRUE -> 1
echo(($neuf==TRUE AND $prix>50) OR ($neuf==FALSE AND $prix<50)); //FALSE
echo("<br />");
echo(substr_count($nom, 'a') OR substr_count($nom, 'e') OR substr_count($nom, 'i') OR substr_count($nom, 'o') OR substr_count($nom, 'u') OR substr_count($nom, 'y')); //TRUE -> 1


echo("<br /><br /><br />");
echo("<h2 style='margin-left: 50px;'><U><strong>EXERCICE 3 :</strong></U></h2>");


//3
$mdp="";
$chars='0123456789abcdefghijklmnopqrstuvwxyz';
$speciaux='!*/+.';

for($i=0; $i<8; $i++)
{
    if($i==0)
    {
        $mdp=$mdp.$chars[mt_rand(10,strlen($chars))-1];
        $mdp=ucfirst($mdp);
    }
    elseif($i==5 OR $i==6)
    {
        $mdp=$mdp.$chars[mt_rand(0,strlen(9))-1];
    }
    elseif($i==7)
    {
        $mdp=$mdp.$speciaux[mt_rand(0,strlen($speciaux)-1)];
    }
    else
    {
        $mdp=$mdp.$chars[mt_rand(10,strlen($chars)-1)];
    }
}
echo($mdp);

echo("<br /><br /><br />");
echo("<h2 style='margin-left: 50px;'><U><strong>EXERCICE 4 :</strong></U></h2>");


//4 « C’est lundi, c’est ravioli »
$tableau = array("lundi","mardi","mercredi");
$chaine = "aeiouy";
$html = "<p><u>tse'c</u></p>";
$lettre = "r lv,";

echo(ucfirst(strrev(mb_substr($html,6,5))). mb_substr($lettre,1,1). $tableau[0]. mb_substr($lettre,4,1). mb_substr($lettre,1,1).
strrev(mb_substr($html,6,5)). mb_substr($lettre,1,1). mb_substr($lettre,0,1). mb_substr($chaine,0,1). mb_substr($lettre,3,1).
mb_substr($chaine,2,2). mb_substr($lettre,2,1). mb_substr($chaine,2,1));

echo("<br /><br /><br />");
echo("<h2 style='margin-left: 50px;'><U><strong>EXERCICE 5 :</strong></U></h2>");

//5 « Mon hamster de Hollande mâche des haricots quand il se cache dans sa hutte »
$ha = "ha";
$he = "eh";
$ho = "HO";
$nb = mt_rand(1,6);

echo("<h".$nb.">Mon ". $ha. "mster de ". ucfirst(strtolower($ho)). "llande mâc". strrev($he). " des ". $ha. "ricots quand il se cac".
strrev($he). " dans sa hutte</h". $nb. ">");

echo("<br /><br /><br />");
echo("<h2 style='margin-left: 50px;'><U><strong>EXERCICE 6 :</strong></U></h2>");

//6 
$title = "Exercice 6"; //(titre de la page)
$li1 = "Accueil"; //(première valeur de liste)
$li2 = "Connexion"; //(deuxième valeur de liste)
$li3 = "Inscription"; //(troisième valeur de liste)


echo("
<head>
    <title>". $title. "</title>
</head>

<body>
    <ul>
        <li>". $li1. "</li>
        <li>". $li2. "</li>
        <li>". $li3. "</li>
    </ul>
</body>

")



?>
