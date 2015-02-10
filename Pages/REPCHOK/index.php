<html>
<head>
	<title>REPCHOK</title>
	<link type="text/css" rel="stylesheet" href="design.css" />
</head>
<body>
	<div id="big_conteneur">
		<a href="index.php">
			<div id="buzzer">
			</div>
		</a>
		<div id="repliques">
			<br/>
			<?php
				$pdo = new PDO('mysql:host=localhost;dbname=repchok', 'root', '');
				$request = $pdo->query('SELECT COUNT(*) AS nombre FROM repliques');
				$row = $request->fetch(PDO::FETCH_ASSOC);
				$nombreReplique = $row['nombre'];
				$numero = rand(1,$nombreReplique);
				$request = $pdo->query('SELECT * FROM repliques WHERE id=' . $numero);				
				$row = $request->fetch(PDO::FETCH_ASSOC);
				echo nl2br($row['contenu']);
				echo '<br/>';				
			?>
	</div>
</body>
</html>
