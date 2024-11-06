<?php


//1 « En filière développement, il faut à minima maîtriser 3 langages : PHP, JavaScript et HTML ! ».
$serie = "125à86,3" ;
$module = array("PHP/MySQL","LMTH/CSS","JavaScript") ;
$csv = "développement;design;marketing" ;
$filiere = "FiliArènu" ;

echo("<h3>". ucfirst(mb_substr($csv,3,1)). mb_substr($filiere,7,1). " ". strtolower(mb_substr($filiere,0,4)).
mb_substr($filiere,6,1). mb_substr($filiere,5,1). mb_substr($csv,3,1). " ". mb_substr($csv,0,13).
mb_substr($serie,6,1). " ". mb_substr($csv,17,1). mb_substr($filiere,2,1). " ".
strtolower(mb_substr($filiere,0,1)). strtolower(mb_substr($filiere,4,1)). mb_substr($filiere,8,1).
mb_substr($csv,26,1). " ". mb_substr($serie,3,1). " minima maîtriser ". mb_substr($serie,-1,1) . " languages : ".
mb_substr($module[0],0,3). mb_substr($serie,6,1). " ". mb_substr($module[2],0,10). " ". mb_substr($csv,3,1).
mb_substr($csv,26,1). " ". strrev(mb_substr($module[1],0,4)). " !". "</h3>");

echo("<br /><br /><br />");


//2 « C’est les vacances de Noël, j’aurai plein de cadeaux ! », « Je suis au bout de ma vie, on est lundi »,
//« Youpi, c’est le week-end »
date_default_timezone_set('UTC');
$date = new DateTimeImmutable();
if (date_format($date, 'Y-m-d')>='2023-12-23' AND date_format($date, 'Y-m-d')<='2024-01-08'){
    echo("C'est les vacances de Noël, j'aurai plein de cadeaux !");
    echo("<br /><br />");
}
else{
    if(date_format($date, 'l')=='Monday'){
        echo("Je suis au bout de ma vie, on est lundi");
        echo("<br /><br />");
    }
    elseif((date_format($date, 'l')=='Saturday') OR (date_format($date, 'l')=='Sunday')){
        echo("Youpi, c'est le week-end");
    }
}

echo("<br /><br /><br />");


//3
$immobilier="maison,appartement,villa,camping,hôtel";
$dico=explode(",", $immobilier);
for($i=0; $i<count($dico); $i++){
    $dico[$i]=ucfirst($dico[$i]);
}

echo "<table border='1'><tr>";
for($i=0; $i<count($dico); $i++){
    if(stripos($dico[$i], 'a')!==FALSE){
        echo("<td>". $dico[$i]. "</td>");
    }
}
echo "</tr></table>";

echo("<br /><br />");

for($i=0; $i<count($dico); $i++){
    if(strlen($dico[$i])<=5){
        unset($dico[$i]);
    }
}

echo("<br /><br />");

$caracteres = strtoupper(substr($dico[0], 0, 2));
echo("Les deux premiers caractères de la première valeur sont : ". $caracteres);

echo("<br /><br />");

$immobilier2 = implode("#", $dico);
echo("Nouvelle chaîne de caractères : ". $immobilier2);

echo("<br /><br /><br />");


//4
$notes=[
    [
        "matiere"=>"Maths",
        "note"=>14,
        "coefficient"=>2,
    ],
    [
        "matiere"=>"Français",
        "note"=>15,
        "coefficient"=>3,
    ],
    [
        "matiere"=>"Histoire",
        "note"=>11,
        "coefficient"=>1,
    ],
];

echo("<table  border='1'>
<tr>
    <td><strong>Matière</strong></td>
    <td><strong>Note</strong></td>
    <td><strong>Coefficient</strong></td>
</tr>");

foreach($notes as $note){
    echo("<tr><td>". $note["matiere"]. "</td><td>". $note["note"]. "</td><td>". $note["coefficient"]. "</td></tr>");
}
echo("</table>");

echo("<br /><br />");

$sommenotes=0;
$sommecoefs=0;

foreach($notes as $note){
    $sommenotes+=$note["note"]*$note["coefficient"];
    $sommecoefs+=$note["coefficient"];
}

$moyenne=$sommenotes/$sommecoefs;

echo("Moyenne : ". round($moyenne,2));

echo("<br /><br /><br />");


//5 "3134653787465098" (incorect) / "3134653787465094" (correct)
$carte="3134653787465094";
$resultatimpair=0;
$resultatpair=0;
$tableau=[];
if(is_numeric($carte) AND strlen($carte)==16){
    if(($carte[0]==3) OR ($carte[0]==4) OR ($carte[0]==5)){
        for($i=0; $i<15; $i+=2){
            if(intval(substr($carte,$i,1))*2>9){
                $tampon=strval(intval(substr($carte,$i,1))*2);
                $resultatimpair=(intval(substr($tampon,0,1))+intval(substr($tampon,1,1)));
                array_push($tableau,$resultatimpair);
            }
            else{
                array_push($tableau,intval(substr($carte,$i,1))*2);
            }
        }
        $resultatimpair=array_sum($tableau);
        for($i=0; $i<15; $i+=2){
            $resultatpair=$resultatpair+intval(substr($carte,$i+1,1));
        }
        $resultat=$resultatimpair+$resultatpair;
        $resultat=strval($resultat);
        if($resultat[-1]=="0"){
            echo("Le numéro de carte ". $carte. " est correct");
        }
        else{
            echo("Le numéro de carte ". $carte. " est incorrect");
        }
        
    }
    else{
            echo("Le premier chiffre doit être 3, 4 ou 5");
        }
}
else{
        echo("Donnez un numéro de carte exclusivement de chiffres");
    }


?>
