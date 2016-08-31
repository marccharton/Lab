    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
<title> Page d'acces </title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
</head>
<body>
    <p>
        <?php
            if(!isset($_POST['pass']))
            {
        ?>
                <h4> Bienvenue Sur le site de la nasa!! </h4> <br />
                <p>
                    Avant d'aller plus, je vais vous demander votre mot de passe s'il vous plait?!
                </p>
        
                <form action="form2.php" method="post">
                    <p>
                    <label for="pass"> Mot de passe : </label><input type="password" name="pass" id="pass"/> 
                    <input type="submit" value="Valider" />
                    </p>
                </form>
        <?php        
            }
            else
            {
                function passError()
                {
                    ?>
                    Sorry, your pass is incorrect. Please make sure of what you wrote.<br />
                    <a href="form2.php"> Return </a>
                    <?php
                }
                
                if ($_POST['pass'] == "kangourou")
                {
                    echo "Bienvenue sur le site de la nasa" . "<br />";
                    echo "Chargement des donnees en cours..." . "<br />";
                }
                else
                    passError();
            }
        
        ?>
        
        
        
    </p>
</body>
</html>


