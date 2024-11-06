<?php

//exo1

$A = 1;
$B = $A + 3;
$A = 3;
echo("A = ".$A."<br>"."B = ".$B."<br><br><br>");

//exo2

$A = 5;
$B = 3;
$C = $A + $B;
$A = 2;
$C = $B - $A;
echo("A = ".$A.", et "."B = ".$B.", et "."C = ".$C."<br><br><br>");

//exo3

$A = 1;
$B = 2;
$C = 0;
echo("A = ".$A."<br>"."B = ".$B."<br><br>");
$C = $A;
$A = $B;
$B = $C;
echo("A = ".$A."<br>"."B = ".$B."<br><br><br>");

//exo4

$A = 1;
$B = 2;
$C = 3;
$D = 0;
echo("A = ".$A."<br>"."B = ".$B."<br>"."C = ".$C."<br><br>");
$D = $B;
$B = $A;
$A = $C;
$C = $D;
echo("A = ".$A."<br>"."B = ".$B."<br>"."C = ".$C."<br><br><br>");

//Cours n2

$jour = "Mardi";

if ($jour == "Lundi")
{
	echo("Dur");
}

elseif ($jour == "Mardi")
{
	echo("Youpi, c'est PHP");
}

elseif ($jour == "Samedi" or $jour == "Dimanche")
{
	echo("Week-end");
}

else
{
	echo("Bof");
}

echo("<br>");

switch($jour)
{
	case "Lundi": echo("Dur"); break;
	case "Mardi": echo("Youpi, c'est PHP"); break;
	case "Samedi": echo("Week-end"); break;
	case "Dimanche": echo("Week-end"); break;
	default: echo("Bof");
}

echo("<br>");

$note = mt_rand(0,20);

echo($note." : ");

switch($note)
{
	case 0: echo("Nul"); break;
	case 10: echo("Bof"); break;
	case 16: echo("Bien"); break;
	case 20: echo("Parfait"); break;
	default: echo("Rien à dire");
}



?>


<?php

//6

$credit = 7;
$newsletter = false;
$prenom = "Astrid";

($credit > 50 and $newsletter == 1);
($prenom == "Astrid" and $credit != 10);
($credit == 30 or $newsletter == 0);
($prenom != 'Marc' and $credit < 10 and $credit > 5);

?>

<?php

//7

($coefficient >= 4);
($specialite != "Design");
($module == "HTML" and $coefficient == 2);
($specialite == "Développement" or $coefficient < 3);
($module == "CSS" xor $specialite == "Marketing");

?>

<?php

//8

$somme = mt_rand(1,100);
$somme++;
$test = 1; // $test = true;
$somme = $somme - $test; // $somme -= $test;

echo(round(1 / $somme,2));

?>

<?php

//10

$vaccin = 1;
$situation = "positif";
$isolement = 7;
$test = "négatif";
$sortie = 0;

// Si vaccin

if ($vaccin == 1)
{
	if ($situation == "positif")
	{
		if ($isolement == 5 and $test == "négatif")
		{
			$sortie = 1;
		}
		
		else
		{
			$isolement = 7;
		}
	}
	
	elseif ($situation == "cas contact")
	{
		if ($test == "négatif")
		{
			$sortie = 1;
		}
	}
}

else
{
	if ($situation == "positif")
	{
		if ($isolement == 7 and $test == "négatif")
		{
			$sortie = 1;
		}
		
		else
		{
			$isolement = 10;
		}
	}
	
	elseif ($situation == "cas contact")
	{
		if ($isolement == 7 and $test == "négatif")
		{
			$sortie = 1;
		}
	}
}

?>


<?php

$jour = "Mardi";

if ($jour == "Lundi")
{
	echo("Dur");
}

elseif ($jour == "Mardi")
{
	echo("Youpi, c'est PHP");
}

elseif ($jour == "Samedi" or $jour == "Dimanche")
{
	echo("Week-end");
}

else
{
	echo("Bof");
}

echo("<br>");

switch($jour)
{
	case "Lundi": echo("Dur"); break;
	case "Mardi": echo("Youpi, c'est PHP"); break;
	case "Samedi": echo("Week-end"); break;
	case "Dimanche": echo("Week-end"); break;
	default: echo("Bof");
}

echo("<br>");

$note = mt_rand(0,20);

echo($note." : ");

switch($note)
{
	case 0: echo("Nul"); break;
	case 10: echo("Bof"); break;
	case 16: echo("Bien"); break;
	case 20: echo("Parfait"); break;
	default: echo("Rien à dire");
}

?>