<html>
    <head>
        <title> Page 1 </title>
    </head>
    <body>
        <div id="corps">
            <?php
                if (isset($_GET['prenom']) AND isset($_GET['nom']) AND isset($_GET['repeter']))
                {
                    $_GET['repeter'] = (int)$_GET['repeter'];
                    if ($_GET['repeter'] >= 1 AND $_GET['repeter'] < 100)
                    {
                        for ($i = 0; $i < $_GET['repeter'] ; $i++)
                            echo $i . "- Bonjour mon petit " . $_GET['prenom'] . " " . $_GET['nom'] . "<br />";
                    }
                    else
                    {
                        echo "Desole mais le chiffre de repetition n'est pas conforme <br />";   
                    }
                }
                else
                {
                    echo "Probleme avec l'url";
                }
            ?>
            
        </div>
    </body>
</html>