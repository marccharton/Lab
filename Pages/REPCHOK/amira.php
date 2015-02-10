<html>
<head>
	<title> Amira </title>
	<style>
		#lol {
			background-color: 	#DDE;
			border: 			black;
			width: 				500px;
			margin:				auto;
			padding:			20px;
			border-radius:		7px;
		}
	</style>
</head>	
<body>	
	<a href="amira.php"> Clique ici </a>
	<div id="lol">
		Replique : <br />
		<?php 
			$db = new PDO('mysql:host=localhost;dbname=repchok', 'root', '');
			$query = $db->query('SELECT count(*) AS compteur FROM repliques');
			$row = $query->fetch(PDO::FETCH_ASSOC);
			$nbRep = $row['compteur'];
			echo "Il y a " . $nbRep . " repliques <br />";
			
			$numRep = rand(1, intval($nbRep));
			echo "Je vais recuperer la " . $numRep . "e replique <br />";
			
			$query = $db->query('SELECT * FROM repliques WHERE id=' . $numRep);
			$rep = $query->fetch(PDO::FETCH_ASSOC);
			echo "Ma réplique est : " . $rep['contenu'] . "<br />";
			
			$query = $db->query('SELECT * FROM categorie WHERE id=' . $rep['categorie_id']);
			$cat = $query->fetch(PDO::FETCH_ASSOC);
			echo "Sa catégorie est : " . $cat['nom'] . "<br />";
		?>
	</div>
</body>
</html>