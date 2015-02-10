<?php
try
{
    // On se connecte � MySQL
    $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
    $bdd = new PDO('mysql:host=localhost;dbname=test', 'root', '', $pdo_options);
    
    $reponse = $bdd->query('SELECT id, nom, console FROM jeux_video WHERE console=\'ps2\' ORDER BY nom ASC');
    while ($data = $reponse->fetch())
    {
	echo $data['id'] . " - Le jeux " . $data['nom'] . " se joue sur " . $data['console'] . ".<br />";
    }
    
}
catch(Exception $e)
{
    // En cas d'erreur pr�c�demment, on affiche un message et on arr�te tout
    die('Erreur : '.$e->getMessage());
}


?>