

<?php
            try
            {
                // On se connecte à MySQL
                $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
                $bdd = new PDO('mysql:host=localhost;dbname=test', 'root', '', $pdo_options);
                
                $bdd->exec('DELETE FROM jeux_video WHERE nom=\'Quenelle Game\'');
/*
                $bdd->exec('INSERT INTO jeux_video(ID, nom, possesseur, console, prix, nbre_joueurs_max, commentaires) VALUES(51, \'Quenelle Game\', \'Quenelle Prod\', \'Qnelle08\', 47, 4, \'Oh mon dieu ce jeux est magique!!!\')');
                $req = $bdd->query('SELECT * FROM jeux_video WHERE nom = \'Quenelle Game\'');
                $data = $req->fetch();
                echo $data['nom'] . " se joue a " . $data['nbre_joueurs_max'] . " joueurs maximum! <br />";
                $req->closecursor();
                
                $bdd->exec('UPDATE jeux_video SET nbre_joueurs_max=47 WHERE nom=\'Quenelle Game\'');
                $req = $bdd->query('SELECT * FROM jeux_video WHERE nom = \'Quenelle Game\'');
                $data = $req->fetch();
                echo $data['nom'] . " se joue a " . $data['nbre_joueurs_max'] . " joueurs maximum!";
                $req->closecursor();
*/                
            }
            catch(Exception $e)
            {       
                // En cas d'erreur précédemment, on affiche un message et on arrête tout
                die('Erreur : '.$e->getMessage());
            }
?>