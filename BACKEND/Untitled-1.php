<?php

$tour=1;
$max=0;
$lucie=0;
$vainqueur=0;

for ($tour=1; $tour<=5; $tour++)
{
    echo("Tour ". $tour. "<br>");
    $max=mt_rand(1,6);
    $lucie=mt_rand(1,6);
    $vainqueur=max($max,$lucie);
    if ($max == $lucie)
    {
        $vainqueur="Les deux";
    }

    elseif ($vainqueur == $max)
    {
        $vainqueur="Max";
    }

    else
    {
        $vainqueur="Lucie";
    }
    
    echo("Max à fait ". $max. " et Lucie à fait ". $lucie. " donc le gagnant est ". $vainqueur. "<br><br>");
}


?>