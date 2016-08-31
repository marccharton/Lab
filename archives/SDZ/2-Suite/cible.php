<html>
<head>
<title> Mon titre </title>
</head>
<body>
    <p>
        <?php
            if (isset($_POST['pseudo']))
                echo "Tu t'appelles : <strong> \"" . $_POST['pseudo'] . "\"</strong> <br />";
            else
                echo "Desole mais il y a erreur avec le prenom...<br />";
            if (!isset($_POST['age']))
                {
                    echo "Probleme avec l'age!!";
                }
            switch($_POST['age'])
            {
                case "020":
                    echo "Tu as entre 0 et 20 ans mon ptit!!";
                break;
                case "2150":
                    echo "Tu as entre 21 et 50 ans mec!";
                break;
                case "5170":
                    echo "Tu as entre 51 et 70 ans monsieur!";
                break;
                case "7199":
                    echo "Tu as entre 71 et 99 ans mon vieux!!!";
                break;
            }
            echo "<br />";
            echo "Vous etes ";
            if (isset($_POST['case1']))
                echo " etudiant,";
            if (isset($_POST['case2']))
                echo " chomeur,";
            if (isset($_POST['case3']))
                echo " actif,";
            if (isset($_POST['case4']))
                echo " Boulanger,";
            echo"<br>";
            if ($_POST['sexe'] == "f")
                echo "Vous etes une femme";
            elseif ($_POST['sexe'] == "m")
                echo "Vous etes un homme";
            echo "<br />";
        ?>
        <a href="form.php"> Retourner en arriere </a>
    </p>
</body>
</html>