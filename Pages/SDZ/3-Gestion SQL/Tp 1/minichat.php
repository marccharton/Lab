<?php
            //Connexion
            try{
                $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
                $bdd = new PDO('mysql:host=localhost;dbname=test', 'root', '', $pdo_options);
            }
            catch(Exception $e){
                // En cas d'erreur précédemment, on affiche un message et on arrête tout
                die('Erreur : '.$e->getMessage());
            }
?>
<html>
<head>
    <title> Minichat </title>
    <style>
        body {
            text-align:     center;
        }
        #champs{
            display:        block;
            padding-top:    20px;
            padding-bottom: 20px;
            color:          blue;
            margin-left:    30%;
            margin-right:   30%;
            border :        dashed 2px black;
        }
        #post{
            display:        block;
            margin-left:    10%;
            margin-right:   10%;
            border :        inset 5px darkblue;
            border-radius:  5%;
            padding:        10;
        }
    </style>
</head>
<body>
    <p>
        <h1> Bienvenue dans mon mini chat </h1>
        
        <form action="minichat_post.php" method="post">
            <div id="champs">
            <label for="pseudo">Pseudo : </label> <input type="text" value="Tape ton pseudo ici" name="pseudo" id="pseudo"/> <br />
            <label for="msg">Message : </label> <input type="text" value="Entre ton message" name="msg" id="msg"/> <br />
            <input type="submit" value="Valider"> <br />
            </div>
        </form>
        
        <div id="post">
            
            <?php
            $reponse = $bdd->query('SELECT * FROM minichat ORDER BY id DESC LIMIT 0,10');
               
            while ($data = $reponse->fetch())
                echo "<strong>" . htmlspecialchars($data['pseudo']) . " : </strong>" . htmlspecialchars($data['message']) . "<br /><br />";
            ?>
        </div>
        
    </p>
</body>
</html>