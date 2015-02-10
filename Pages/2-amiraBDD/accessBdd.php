<html>
<head>
<title> PHP OBJET </title>
<style>
 * {padding: 0px;margin: 0px;}
 section {padding:20px;margin:auto;margin-top:20px;width:70%;border:black solid 1px;background-color:#EEE;border-radius:5px;}
</style>
<?php
    include ("Address.php");
?>
</head>
<body>
    	<?php
            function printEpimarketDatas()
            {    
                try 
                {
                    $db = new PDO('mysql:host=localhost;dbname=epimarket', 'root', '');
                    $query = $db->query('SELECT * FROM  `address` LIMIT 0 , 30');
                    while ($row = $query->fetch(PDO::FETCH_ASSOC))
                    {
                        $address = new Address();
                        $address->hydrate($row);
                        $address->toString();
                    }
                }
                catch (Eception $e)
                {
                    die('Erreur : ' . $e->getMessage());
                }
            }
            
            function printForum()
            {
                try 
                {
                    $db = new PDO('mysql:host=localhost;dbname=test', 'root', '');
                    $query = $db->query('SELECT * FROM  `forum`');
                    while ($row = $query->fetch(PDO::FETCH_ASSOC))
                    {
                        echo "<section>";
                        echo $row['id'] . "<br />";
                        echo $row['post'] . "<br />";
                        echo $row['postMan'] . "<br />";
                        echo $row['date'] . "<br />";
                        echo "</section>";
                    }
                }
                catch (Eception $e)
                {
                    die('Erreur : ' . $e->getMessage());
                }
            }
            
            printForum();
            
	?>
</body>
</html>