<?php

//Exercice 1
$test = 3;
($test == 3);
echo($test);
unset($test);
$voyage = "voyage";
$prix = 0;
$prix += 1;
$prix -= 1;
$libre = TRUE;


echo(isset($test));
echo(strpos("Tout compris", $voyage));
echo($voyage[0] == "A");
echo(($prix>=1000) AND ($prix<=2000));
echo(($prix%2) ==  0); //1
echo(($libre == TRUE) AND $prix<500); //1
echo(($libre == FALSE) XOR ((in_array('a', str_split($voyage))) OR (in_array('e', str_split($voyage))) OR (in_array('i', str_split($voyage))) OR (in_array('o', str_split($voyage))) OR (in_array('u', str_split($voyage))) OR (in_array('y', str_split($voyage))))); //1
echo(($voyage[0] == ucfirst($voyage[0])) AND (($libre == TRUE OR $libre == FALSE)));


echo("<br><br><br>");


//Exercice 2
function is_email($mail)
{
    if (strlen($mail)>=7)
    {
        if (strpos($mail, '.') !== FALSE)
        {
            if (($mail[0] != '.') AND ($mail[-1] != '.'))
            {
                if (strpos($mail, '@') == TRUE)
                {
                    $mailexplode = explode('@', $mail);
                    if (strlen(end($mailexplode))>=4)
                    {
                        if (strtolower($mail) == $mail)
                        {
                            $mailexplode = explode('.', $mail);
                            if (strlen(end($mailexplode))>=2)
                            {
                                echo("l'email est correctement écrite");
                            }
                            else
                            {
                                echo("Il faut au moins deux caractères apèrs le dernier point");
                            }
                        }
                        else
                        {
                            echo("Votre adresse mail doit être en minuscule");
                        }
                    }
                    else
                    {
                        echo("Il faut au moins 4 caractères après le @");
                    }
                }
                else
                {
                    echo("Il faut un arobase");
                }
            }
            else
            {
                echo("Les points ne doivent pas être au début et à la fin");
            }
        }
        else
        {
            echo("Il faut au moins un point");
        }

    }
    else
    {
        echo("Il faut au moins 7 caractères");
    }
}


echo(is_email('je.suis.un.mail@gmail.com'). "<br>");
echo(is_email('je.suis.un.mail@onsaitpas.zu'). "<br>");
echo(is_email('je.suis.un.mail@orange.fr'). "<br>");


echo("<br><br><br>");


//Exercice 3
$sports = 
[
    [
        "nom"=>"aviron",
        "date"=>"2024-07-11",
        "lieu"=>"La Seine",
    ],
    [
        "nom" => "Natation",
        "date" => "2024-07-25",
        "lieu" => "Piscine Georges Vallerey",
    ],
    [
        "nom" => "Football",
        "date" => "2024-07-28",
        "lieu" => "Stade de France",
    ],
    [
        "nom" => "Basketball",
        "date" => "2024-08-02",
        "lieu" => "Accor Hotels Arena",
    ],
    [
        "nom" => "gbm",
        "date" => "2024-07-29",
        "lieu" => "Palais des sports Marcel-Cerdan",
    ]
];

foreach ($sports as $sport)
{
    $date_debut = new DateTime($sport["date"]);
    if ($date_debut > new DateTime("2024-08-01"))
    {
        $style = "font-weight: bold;";
    }
    else
    {
        $style = "font-weight: normal;";
    }
    if ((strlen($sport["lieu"]) > 10))
    {
        $lieu = $sport["lieu"];
    }
    else
    {
        $lieu = "";
    }
    if ((in_array('a', str_split($sport["nom"]))) OR (in_array('e', str_split($sport["nom"]))) OR (in_array('i', str_split($sport["nom"]))) OR (in_array('o', str_split($sport["nom"]))) OR (in_array('u', str_split($sport["nom"]))) OR (in_array('y', str_split($sport["nom"]))))
    {
        $sport2 = strtoupper($sport["nom"]);
    }
    else
    {
        $sport2 = $sport["nom"];
    }
    echo("<div style='". $style. "'>Le sport ". $sport2. " aura lieu à partir du ". $sport['date']. ", ". $lieu. "</div>");
}


echo("<br><br><br>");


//Exercice 4
$mot = "<p>phenolté</p>";
$tableau = array("inter", "est", "dit");
$complement = "ne";
$fin = "CLASS";

echo(mb_substr($mot, 0, 3). ucfirst(mb_substr($mot, 8, 1)). mb_substr($mot, 5, 1). " ". mb_substr($mot, 9, 2). mb_substr($mot, 8, 1). mb_substr($mot, 10, 1). mb_substr($mot, 3, 2).
strrev(mb_substr($mot, 5, 3)). " ". $tableau[1]. " ". $tableau[0]. $tableau[2]. " ". strrev($complement). " ". strtolower($fin).
mb_substr($complement, 1, 1). mb_substr($mot, 11, 4));

//Exercice 5
$produit = "Livre";
$promotion = TRUE;
$prix = 0;

if ($produit == "Livre")
{
    if (date("l") == "Saturday" OR date("l") == "Sunday")
    {
        $prix = $promotion ? 5 : 8; //? est une condition comme un if donc si promotion est vrai alors on renvoi 5 et sinon on renvoi 8
    }
    else
    {
        $prix = $promotion ? 6 : 10;
    }
}
elseif ($produit == "Téléphone")
{
    if (date("m") == 12)
    {
        $prix = $promotion ? 349 : 579;
    }
    else
    {
        $prix = $promotion ? 459 : 999;
    }
}
elseif ($produit == "Raquette de tennis") {
    if (date("G") < 18)
    {
        $prix = $promotion ? 70 : 95;
    }
    else
    {
        $prix = $promotion ? 55 : 85;
    }
}

echo("Le prix du produit ". $produit. " est de ". $prix. "€");


echo("<br><br><br>");


// Exercice 6
$randint = 10;
$y = 10;
$i = 0;
while ($randint > 2)
{
    $randint = random_int(1, $y);
    if ($randint > 2)
    {
        $y -= 1;
    }
    elseif ($randint == 2)
    {
        echo($i);
    }
    $i += 1;
}


echo("<br><br><br>");


//Exercice 7
/*
$compteurx = 0;
$compteuro = 0;
function tableauhtml($lignes, $colonnes)
{
    echo("<table border='1'>");
    for ($i = 0; $i < $lignes; $i++)
    {
        echo("<tr>");
        for ($j = 0; $j < $colonnes; $j++)
        {
            if ($symbole == "X")
            {
                if ($compteurx == 3)
                {
                    $symbole = "/"
                    $compteurx == 0;
                }
                $compteurx += 1;
                $compteuro == 0;
            }
            else
            {
                if ($symbole == "O")
                {
                    if ($compteuro == 2)
                    {
                        $randint = (random_int(0, 2));
                        $symb = ["X", "O", "V"];
                        $symbole = $symb[$randint];
                        $compteuro == 0;
                    }
                    $compteuro += 1;
                    $compteurx == 0;
                }
                
            }
            $symbole = (random_int(0, 1) == 0) ? "X" : "O";
            echo("</td>". $symbole. "</td>");
        }
    }
}
*/

?>