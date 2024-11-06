<?php


echo("<head>
<meta charset=\"UTF-8\">
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
<title>page1</title>
</head>");



//1 Nous sommes mardi 26 Novembre 2019
$jour = "Dimar" ;
$mois = "<i>NOVeMBRE26</i>" ;
$annee = "9102" ;
echo("<U>". substr($mois,0,3). "Nous sommes ". substr($jour,2,3). "di ". substr($mois,11,2). " ". ucfirst(strtolower(substr($mois,3,8))). " ". strrev($annee). substr($mois,13,4). "</U>");


echo("<br /><br /><br />");

//2 Il est facile d’apprendre le HTML, l’apprentissage du langage CSS est d’un niveau intermédiaire, le PHP est plus compliqué car il faut notamment jongler entre les ', les " et les ).

$matiere = array("PHP", "HTML", "CSS");

$niveau = array(
    "html"=>"facile",
    "css"=>"intermédiaire",
    "php"=>"compliqué"
);

echo("Il est <strong>". $niveau["html"]. "</strong> d'apprendre le <strong>". $matiere[2]. "</strong>, l'apprentissage du langage <strong>". $matiere[2]. "</strong> est de niveau <strong>". $niveau["css"]. "</strong>, le <strong>". $matiere[0]. "</strong> est plus <strong>". $niveau["php"]. "</strong> car il faut notamment jongler entre les ', les \" et les ).");


echo("<br /><br /><br />");

//3 Dans la salle 1, le cinéma projette le film "La cité de la peur", réalisé par Les Nuls.


$dico = [
    [
        "salle"=>"1",
        "film"=>"La cité de la peur",
        "real"=>"Les Nuls"
    ],
    [
        "salle"=>"2",
        "film"=>"shrek",
        "real"=>"Le Binoclar"
    ],
    [
        "salle"=>"3",
        "film"=>"Cars",
        "real"=>"L'autre mec"
    ]
    ];


    for($i=0; $i<count($dico); $i++)
{
    echo("Dans la salle ". $dico[$i]["salle"]. ", le cinéma projette le film \"". $dico[$i]["film"]. "\", réalisé par ". $dico[$i]["real"]. ".<br />");
}

echo("<br /><br /><br />");


//4 Je déteste la ratatouille !
$plat = "tedéraatjo!s liu" ;

echo(ucfirst(substr($plat,9,1)). substr($plat,1,1). substr($plat,13,1). substr($plat,2,3). substr($plat,0,1). substr($plat,1,1). substr($plat,12,1).
substr($plat,0,2). substr($plat,13,1). substr($plat,14,1). substr($plat,6,1). substr($plat,13,1). substr($plat,5,2).
substr($plat,0,1). substr($plat,6,1). substr($plat,0,1). substr($plat,10,1). strrev(substr($plat,15,2)). substr($plat,14,1). substr($plat,14,1).
substr($plat,1,1). substr($plat,13,1). substr($plat,11,1));
//mb_substr pour prendre en compte les accents sans increnter 1 de plus


echo("<br /><br /><br />");

//5 

$personne = "Riner Teddy";
$pos = strpos($personne," ", 0);
echo(ucfirst(strtolower(substr($personne,$pos+1,strlen($personne)))). substr($personne,$pos,1). strtoupper(substr($personne,0,$pos)));

echo("<br /><br /><br />");


//6 La moyenne calculée pour les notes A, B, C, D et E est de X,XX
$note = array(mt_rand(1,20),mt_rand(1,20),mt_rand(1,20),mt_rand(1,20),mt_rand(1,20));
$moy = round(($note[0]+$note[1]+$note[2]+$note[3]+$note[4])/count($note),2);

echo("<p style='text-align: center'>La moyenne calculée pour les notes ". $note[0]. ", ". $note[1]. ", ". $note[2]. ", ". $note[3]. " et ". $note[4]. " est de ". number_format($moy, 2, ',', ' '));
echo("<br />");

if($moy<5){
    echo("Vous êtes nul(le)");
}
elseif($moy>=5 and $moy<10){
    echo("Bof...");
}
elseif($moy>=10 and $moy<15){
    echo("Correct");
}
else{
    echo("Bravo !");
}
echo("</p>")


?>
