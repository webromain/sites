<?php

$couleurdefond = "white";
$mail = "contact@eemi.com";

echo("<head>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>page1</title>
</head>");

echo("<ul id=\"navbar\" class=\"reveal\" style='list-style: none; margin: 0; display: inline-flex;' >
<li style='padding: 20px; background-color: black;'><a style='color: white;' href=\"introduction.html#introduction\">QɄ₳₦₮łQɄɆ</a></li>
<li style='padding: 20px; background-color: black;'><a style='color: white;' href=\"partie1.html#partie1\">LES BASES</a></li>
<li style='padding: 20px; background-color: black;'><a style='color: white;' href=\"partie2.html#partie2\">APPLICATIONS</a></li>
<li style='padding: 20px; background-color: black;'><a style='color: white;' href=\"partie3.html#partie3\">DEFIS</a></li>
<li style='padding: 20px; background-color: black;'><a style='color: white;' href=\"conclusion.html#conclusion\">FUTUR</a></li>
</ul>");

echo("<h1 style='padding: 20px; text-align: center;'>Page 1</h1>
<a style='margin-left: 20vh; margin-top: 20vh;' href=('mailto:". $mail. "'>Ecrire à ". $mail. "</a>

<style>
    body{
        background-color: ". $couleurdefond. ";
    }
</style>");

echo("</br></br></br></br><p style='margin-left: 50px; margin-right: 50px; background-color: rgb(148, 148, 148); padding: 25px; border-radius: 15px;'>Lorem ipsum dolor sit amet. Hic molestiae perferendis qui incidunt quaerat ut neque enim in beatae numquam? Ea neque totam aut praesentium consequatur et magnam ipsa quo nulla quia sit debitis accusamus. Eos ipsa suscipit id eveniet facilis qui doloribus illum.

In facere assumenda et eveniet repellendus ut quibusdam dolor eum nesciunt pariatur vel inventore iusto ex ipsa aperiam. Quo labore voluptas ut quos culpa et dolore dolores ut assumenda repellat sit doloremque nostrum ut deserunt voluptas. Sed molestias beatae est consequatur provident aut pariatur maxime et tempore nostrum est accusantium quod aut dolores rerum.

Quo ipsa laudantium est autem quia et nesciunt repudiandae? Et vitae molestiae vel temporibus inventore et laboriosam incidunt aut aliquam velit a modi tempore. Id tempore quod vel fugit itaque aut omnis autem sed nisi sint.</p>")


?>