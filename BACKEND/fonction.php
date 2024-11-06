<?php

function prix_ttc()
{
    $tva = $ht * 0.2;
    $prix_ttc = $ht + $tva;

    return($prix_ttc);
}

$prix = mt_rand(10,500);

$tableau = [0,2.1,5.5,10,20];
$taux = $tableau[mt_rand(0,4)];

echo("Pour un prix HT de ". $prix." €, le prix TTC est de ". $taux. "" pix_ttc($prix). " €");





?>