<?php

// Départ

$score_max = 0;
$score_lucie = 0;

// Tableau

echo('<table border="1" align="center" width="70%" cellspacing="0" cellpadding="10">');

echo('<tr>');
echo('<th>Tour</th>');
echo('<th>1</th>');
echo('<th>2</th>');
echo('<th>3</th>');
echo('<th>4</th>');
echo('<th>5</th>');
echo('</tr>');

// Tour 1

$lancer_max = mt_rand(1,6);
$lancer_lucie = mt_rand(1,6);

$resultat1 = "Max fait un ".$lancer_max."<br>Lucie fait un ".$lancer_lucie;

if ($lancer_max > $lancer_lucie)
{
	$score_max++;
	
	$vainqueur1 = "Max";
}

elseif ($lancer_lucie > $lancer_max)
{
	$score_lucie++;
	
	$vainqueur1 = "Lucie";
}

else
{
	$vainqueur1 = "Egalité";
}

// Tour 2

$lancer_max = mt_rand(1,6);
$lancer_lucie = mt_rand(1,6);

$resultat2 = "Max fait un ".$lancer_max."<br>Lucie fait un ".$lancer_lucie;

if ($lancer_max > $lancer_lucie)
{
	$score_max++;
	
	$vainqueur2 = "Max";
}

elseif ($lancer_lucie > $lancer_max)
{
	$score_lucie++;
	
	$vainqueur2 = "Lucie";
}

else
{
	$vainqueur2 = "Egalité";
}

// Tour 3

$lancer_max = mt_rand(1,6);
$lancer_lucie = mt_rand(1,6);

$resultat3 = "Max fait un ".$lancer_max."<br>Lucie fait un ".$lancer_lucie;

if ($lancer_max > $lancer_lucie)
{
	$score_max++;
	
	$vainqueur3 = "Max";
}

elseif ($lancer_lucie > $lancer_max)
{
	$score_lucie++;
	
	$vainqueur3 = "Lucie";
}

else
{
	$vainqueur3 = "Egalité";
}

// Tour 4

$lancer_max = mt_rand(1,6);
$lancer_lucie = mt_rand(1,6);

$resultat4 = "Max fait un ".$lancer_max."<br>Lucie fait un ".$lancer_lucie;

if ($lancer_max > $lancer_lucie)
{
	$score_max++;
	
	$vainqueur4 = "Max";
}

elseif ($lancer_lucie > $lancer_max)
{
	$score_lucie++;
	
	$vainqueur4 = "Lucie";
}

else
{
	$vainqueur4 = "Egalité";
}

// Tour 5

$lancer_max = mt_rand(1,6);
$lancer_lucie = mt_rand(1,6);

$resultat5 = "Max fait un ".$lancer_max."<br>Lucie fait un ".$lancer_lucie;

if ($lancer_max > $lancer_lucie)
{
	$score_max++;
	
	$vainqueur5 = "Max";
}

elseif ($lancer_lucie > $lancer_max)
{
	$score_lucie++;
	
	$vainqueur5 = "Lucie";
}

else
{
	$vainqueur5 = "Egalité";
}

echo('<tr>');
echo('<th>Résultat</th>');
echo('<td>'.$resultat1.'</td>');
echo('<td>'.$resultat2.'</td>');
echo('<td>'.$resultat3.'</td>');
echo('<td>'.$resultat4.'</td>');
echo('<td>'.$resultat5.'</td>');
echo('</tr>');

echo('<tr>');
echo('<th>Vainqueur</th>');
echo('<td>'.$vainqueur1.'</td>');
echo('<td>'.$vainqueur2.'</td>');
echo('<td>'.$vainqueur3.'</td>');
echo('<td>'.$vainqueur4.'</td>');
echo('<td>'.$vainqueur5.'</td>');
echo('</tr>');

echo('</table>');

// Vainqueur

if ($score_max > $score_lucie)
{
	echo("<strong>Score final : Max l'emporte sur le score de ".$score_max." à ".$score_lucie."</strong>");
}

elseif ($score_lucie > $score_max)
{
	echo("<strong>Score final : Lucie l'emporte sur le score de ".$score_lucie." à ".$score_max."</strong>");
}

else
{
	echo("<strong>Score final : égalité ".$score_lucie." - ".$score_max."</strong>");
}

$aide_totale=$enfant+1. "50";
echo($aide_totale)

?>