<?php

//Exercice 1

$t=4+7;
$w=$t+2;
$w=$w-($t-$w);
$c="bon";
$t=12;
echo("J'ai ". $w. " ". $c. $c. "s, pas ". $t. ".");

//
echo("</br></br>");
//

//Exercice 2

$o='o';
$e='e';
$i="i";
echo('V'.$o.$i.'c'.$i.' l'.$e.'s numér'.$o.'s du l'.$o.'t'.$o.' : ');
for($tour=1; $tour<=4; $tour++)
{
    echo(mt_rand(1,49).', ');
}
echo('et '.mt_rand(1,49).'.');

//
echo("</br></br>");
//

//Exercice 3

$film="un film";
$realisateur="un realisateur";
$genre="un genre";

echo($genre != "Comédie dramatique"); //TRUE -> 1
echo(($realisateur=="Stone") && ($genre=="Policier")); // FALSE -> 0 -> rien
echo(($film == "Matrix") || ($realisateur != "Coppola")); //TRUE -> 1
echo(($realisateur == "Scorsese") && ($genre == "Thriller" || "Western")); //FALSE -> 0 -> rien
echo(($film == "Joker") xor ($realisateur == "Phillips")); // FALSE -> 0 -> rien
echo($film == strtoupper($film)); // FALSE -> 0 -> rien

//
echo("</br></br>");
//

//Exercice 4

$compteur=3;
while ($compteur>=0)
{
    if ($compteur==0)
    {
        echo($compteur. " !");
    }
    else
    {
        echo($compteur. "...");
    }
    $compteur--;

}

//
echo("</br></br>");
//

//Exercice 5

$nombre=0; //0 seule -> 1 en couple
$enfant=0;
$rsa=FALSE;
$ass=FALSE;
$aide_logement=FALSE;
$total=50+100*($enfant+1);

echo("<table border='1' width='50%' cellspacing='0' cellpadding='5'>");
echo("<tr><th>Situation familiale</th><th>Bénéficiaires du RSA</th><th>Bénéficiaires de l'ASS</th><th>Bénéficiaire uniquement d'une aide au logement</th><th>Aide totale</th></tr>");

if ($aide_logement == TRUE && $enfant == 0)
{
    $total-=50;
    echo("<tr><th>". $nombre. " Personne, ". $enfant. " Enfants</th><th>". $rsa. "</th><th>". $ass. "</th><th>". $aide_logement. "</th><th>". $total. "€". "</th></tr></table>");
}
elseif (($rsa || $ass) == TRUE)
{
    echo("<tr><th>". $nombre. " Personne, ". $enfant. " Enfants</th><th>". $rsa. "</th><th>". $ass. "</th><th>". $aide_logement. "</th><th>". $total. "€". "</th></tr></table>");
}
else
{
    echo("<tr><th>". $nombre. " Personne, ". $enfant. " Enfants</th><th>". $rsa. "</th><th>". $ass. "</th><th>". $aide_logement. "</th><th>". "0". "€". "</th></tr></table>");
}

//
echo("</br></br>");
//

echo("<table border='1' width='50%' cellspacing='0' cellpadding='5'>");
echo("<tr><th>Situation familiale</th><th>Bénéficiaires du RSA</th><th>Bénéficiaires de l'ASS</th><th>Bénéficiaire uniquement d'une aide au logement</th></tr>");
echo("<tr><th>Personne seule ou en couple, sans enfant</th><th>150€</th><th>150€</th><th>Pas concerné</th></tr>");
echo("<tr><th>Personne seule ou en couple, avec un enfant à charge</th><th>250€</th><th>250€</th><th>100€</th></tr>");
echo("<tr><th>Personne seule ou en couple, avec deux enfants à charge</th><th>350€</th><th>350€</th><th>200€</th></tr>");
echo("<tr><th>Personne seule ou en couple, avec trois enfants à charge</th><th>450€</th><th>450€</th><th>300€</th></tr>");
echo("<tr><th>Personne seule ou en couple, avec quatre enfants à charge</th><th>550€</th><th>550€</th><th>400€</th></tr>");
echo("</table>");

?>