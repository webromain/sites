<?php
//10 manche, afficher vainqueur
$maxence=0;
$amandine=0;
$scoremax=0;
$scoream=0;
$tableau=["pierre","feuille","ciseaux"];
$i=0;

while ($scoremax<10 AND $scoream<10)
{
    $maxence=mt_rand(0,2);
    $amandine=mt_rand(0,2);
    $i+=1;
    if(($tableau[$maxence]=="pierre") AND ($tableau[$amandine]=="pierre")){
        echo("Ex æquo.<br /><br />");
    }
    elseif(($tableau[$maxence]=="pierre") AND ($tableau[$amandine]=="feuille")){
        $scoream+=1;
        echo("Le gagnant de la manche ". $i. " est Amandine qui passe au score de ". $scoream. ".<br />");
        echo("Maxence a ". $scoremax. " et Amandine a ". $scoream. ".<br /><br />");

    }
    elseif(($tableau[$maxence]=="pierre") AND ($tableau[$amandine]=="ciseaux")){
        $scoremax+=1;
        echo("Le gagnant de la manche ". $i. " est Maxence qui passe au score de ". $scoremax. ".<br />");
        echo("Maxence a ". $scoremax. " et Amandine a ". $scoream. ".<br /><br />");
    }
    elseif(($tableau[$maxence]=="feuille") AND ($tableau[$amandine]=="pierre")){
        $scoremax+=1;
        echo("Le gagnant de la manche ". $i. " est Maxence qui passe au score de ". $scoremax. ".<br />");
        echo("Maxence a ". $scoremax. " et Amandine a ". $scoream. ".<br /><br />");
    }
    elseif(($tableau[$maxence]=="feuille") AND ($tableau[$amandine]=="feuille")){
        echo("Ex æquo.<br /><br />");
    }
    elseif(($tableau[$maxence]=="feuille") AND ($tableau[$amandine]=="ciseaux")){
        $scoream+=1;
        echo("Le gagnant de la manche ". $i. " est Amandine qui passe au score de ". $scoream. ".<br />");
        echo("Maxence a ". $scoremax. " et Amandine a ". $scoream. ".<br /><br />");
    }
    elseif(($tableau[$maxence]=="ciseaux") AND ($tableau[$amandine]=="pierre")){
        $scoream+=1;
        echo("Le gagnant de la manche ". $i. " est Amandine qui passe au score de ". $scoream. ".<br />");
        echo("Maxence a ". $scoremax. " et Amandine a ". $scoream. ".<br /><br />");
    }
    elseif(($tableau[$maxence]=="ciseaux") AND ($tableau[$amandine]=="feuille")){
        $scoremax+=1;
        echo("Le gagnant de la manche ". $i. " est Maxence qui passe au score de ". $scoremax. ".<br />");
        echo("Maxence a ". $scoremax. " et Amandine a ". $scoream. ".<br /><br />");
    }
    elseif(($tableau[$maxence]=="ciseaux") AND ($tableau[$amandine]=="ciseaux")){
        echo("Ex æquo.<br /><br />");
    }



}

if($scoremax>$scoream){
    echo("Le gagnant final est Maxence avec ". $scoremax. " points contre Amandine avec ". $scoream. " points.");
}
elseif($scoremax<$scoream){
    echo("Le gagnant final est Amandine avec ". $scoream. " points contre Maxence avec ". $scoremax. " points.");
}


?>
