<?php


//18
$jour="Nous sommes jeudi";
echo(str_replace('j','J',"Nous somme jeudi"));

echo("</br></br></br>");

//19
$libelle="ce module";
$mot="rappel";
$matiere="php";
echo(ucfirst($libelle). ' '. str_replace('r',"s'",$mot). 'le... '. strtoupper($matiere).'/MySQL !');

echo("</br></br></br>");

//20 « La date du jour est vendredi 12 Avril »
$jour = "vendredis" ;
$mois = "<p>GVRIL</p>" ;
$serie = "3821293849" ;
$mois = substr($mois,3,5);
$mois = strtolower($mois);
echo('La date du jour est '. substr($jour,0,8). ' '. substr($serie,3,2). ' '. str_replace('g','A',$mois));

echo("</br></br></br>");

$txt = "Geeksforgeeks";
 echo "Last Character of string is : " 
   .$txt[strlen($txt)-1];

echo("</br></br></br>");

//21 « La France a remporté la Coupe Du Monde le 15/07/2018 » 
$evt = "coupe du monde" ;
$date = "20180715" ;
$pays = "ecnarf" ;
$pays = strrev($pays);
ucfirst($pays);
ucwords($evt);
$jour = substr($date,6,2);
$mois = substr($date,4,2);
$annee = substr($date,0,4);
echo('La '. $pays. ' a remporté la '. $evt. ' le '. $jour. '/'. $mois. '/'. $annee);



?>