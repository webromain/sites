<?php


function tablebasse($chaine)
{
    $chaine = strtoupper($chaine);
    $chaine = strip_tags($chaine);
    $chaine = str_replace(" ", "", $chaine);

    $debut = substr($chaine, 0, 2);

    $milieu = substr($chaine, 2, 2);
    $milieu = strrev($milieu);

    $fin = substr($chaine, 4);

    $chaine = $debut.$milieu.$fin;
    
    return($chaine);


    return $chaine;
}

$texte="<br>jenesaispas<br>";

echo(tablebasse($texte));

echo("<br><br><br><br>");


function change_date($date)
{
    // AAAA-JJ-MM

    $annee = substr($date,0,4);
    $mois = substr($date,-2);
    $jour = substr($date,5,2);

    $date = $jour."/".$mois."/".$annee;

    return($date);
}

$date = "2003-26-05";

echo(change_date($date)); //26/05/2003


echo("<br><br><br><br>");


function is_num($tel)
{
    if((is_numeric($tel) == TRUE) AND ($tel[0] ==  "0") AND (strlen($tel)==10))
    {
        return "Le numéro ". $tel. " est bien un numéro français.";
    }
    else
    {
        return "Le numéro ". $tel. " n'est pas un numéro francais où n'existe pas.";
    }

}

echo(is_num("0678564567"));


echo("<br><br><br><br>");


function is_code($code)
{
    if(is_numeric(substr($code, 0, 1). substr($code, 2, 3)) AND (is_numeric(substr($code, 1, 1)) OR substr($code, 1, 1) == "A" OR substr($code, 1, 1) == "B") AND strlen($code)==5)
    {
        return "Le code postal est bon.";
    }
    
    else
    {
        return "Le code postal n'est pas bon.";
    }
}

$codepostal="78000";

echo(is_code($codepostal));












/*
function del_accents($chaine)
{
    for($i=0; $i<strlen($chaine); $i++)
    {
        if(($chaine[$i] == ("À")) OR ($chaine[$i] == ("Á")) OR ($chaine[$i] == ("Â")) OR ($chaine[$i] == ("Ã")) OR ($chaine[$i] == ("Ä")) OR ($chaine[$i] == ("Å")))
        {
            str_replace($chaine, $chaine[$i], "A");
        }
        elseif($chaine[$i] == ($chaine[$i] == ("à")) OR ($chaine[$i] == ("á")) OR ($chaine[$i] == ("â")) OR ($chaine[$i] == ("ã")) OR ($chaine[$i] == ("ä")) OR ($chaine[$i] == ("å")))
        {
            str_replace($chaine, $chaine[$i], "a");
        }
        elseif($chaine[$i] == ($chaine[$i] == ($chaine[$i] == ("à")) OR ($chaine[$i] == ("á")) OR ($chaine[$i] == ("â")) OR ($chaine[$i] == ("ã")) OR ($chaine[$i] == ("ä")) OR ($chaine[$i] == ("å")))
        ("Ò" OR "Ó" OR "Ô" OR "Õ" OR "Ö"))
        {
            str_replace($chaine, $chaine[$i], "O");
        }
        elseif($chaine[$i] == ("ò" OR "ó" OR "ô" OR "õ" OR "ö" OR "ø"))
        {
            str_replace($chaine, $chaine[$i], "o");
        }
        elseif($chaine[$i] == ("È" OR "É" OR "Ê" OR "Ë"))
        {
            str_replace($chaine, $chaine[$i], "E");
        }
        elseif($chaine[$i] == ("è" OR "é" OR "ê" OR "ë"))
        {
            str_replace($chaine, $chaine[$i], "e");
        }
        elseif($chaine[$i] == ("Ç"))
        {
            str_replace($chaine, $chaine[$i], "C");
        }
        elseif($chaine[$i] == ("ç"))
        {
            str_replace($chaine, $chaine[$i], "c");
        }
        elseif($chaine[$i] == ("Ì" OR "Í" OR "Î"  OR "Ï"))
        {
            str_replace($chaine, $chaine[$i], "I");
        }
        elseif($chaine[$i] == ("ì" OR "í" OR "î" OR "ï"))
        {
            str_replace($chaine, $chaine[$i], "i");
        }
        elseif($chaine[$i] == ("Ù" OR "Ú" OR "Û" OR "Ü"))
        {
            str_replace($chaine, $chaine[$i], "U");
        }
        elseif($chaine[$i] == ("ÿ"))
        {
            str_replace($chaine, $chaine[$i], "y");
        }
        elseif($chaine[$i] == ("Ñ"))
        {
            str_replace($chaine, $chaine[$i], "N");
        }
        elseif($chaine[$i] == ("ñ"))
        {
            str_replace($chaine, $chaine[$i], "n");
        }

    }
}

echo(del_accents("éèñ"));

*/

/*$alphabet = "AAAAAAaaaaaaOOOOOOooooooEEEEeeeeCcIIIIiiiiUUUUuuuuyNn"

$accents"ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ"


$tls       = Transliterator::createFromRules('::Any-Latin; ::Latin-ASCII; ::NFD; ::NFC;');
$no_accent = $tls->transliterate($str);*/


?>