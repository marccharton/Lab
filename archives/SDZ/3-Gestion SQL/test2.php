

<?php
            try
            {
                // On se connecte à MySQL
                $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
                $bdd = new PDO('mysql:host=localhost;dbname=test', 'root', '', $pdo_options);
                
                $reponse = $bdd->prepare('SELECT id, nom, console FROM jeux_video WHERE console= ? ORDER BY nom ASC');
                if (!isset($_GET['console']))
                    {
                        echo "La variable console n'existe pas! <a href=\"test2.php?console=ps2\">envoyer la variable</a>";
                    }
                else
                    {
                        $reponse->execute(array($_GET['console']));
                        while ($data = $reponse->fetch())
                        {
                            echo $data['id'] . " - Le jeux " . $data['nom'] . " se joue sur " . $data['console'] . ".<br />";
                        }
                        echo "<a href=\"test2.php?\">Retour</a>";
                    }
                $reponse->closecursor();
                
            }
            catch(Exception $e)
            {       
                // En cas d'erreur précédemment, on affiche un message et on arrête tout
                die('Erreur : '.$e->getMessage());
            }
?>