<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
<title> Page d'acces </title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
</head>
<body>
    <?php
        function passError()
        {
            echo "Sorry, your pass is incorrect. Please make sure of what you wrote.<br />";
            echo "<a href=\"form.php\"> Return </a>";
        }
        
        if (isset($_POST['pass']))
        {
            if ($_POST['pass'] == "kangourou")
            {
                echo "Bienvenue sur le site de la nasa" . "<br />";
                echo "Chargement des donnees en cours..." . "<br />";
                echo "<pre>" . print_r($_POST) . "</pre>";
            }
            else
                passError();    
            
        }
        else
            passError();
    ?>
</body>
</html>