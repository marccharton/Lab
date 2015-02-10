<?php
            //Connexion
            try{
                $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
                $bdd = new PDO('mysql:host=localhost;dbname=test', 'root', '', $pdo_options);
                echo "Connexion reussi...";
            }
            catch(Exception $e)
            {
                // En cas d'erreur précédemment, on affiche un message et on arrête tout
                die('Erreur : '.$e->getMessage());
            }
            
    
    
    //  Ajout a la base de donnees
    $reponse = $bdd->prepare("INSERT INTO minichat(pseudo, message) VALUES(:pseud, :mess)");
    $reponse->execute(array('pseud' => $_POST['pseudo'], 'mess' => $_POST['msg']));
    
    
    //  Redirection
            header('Location:minichat.php');
?>