<?php

if (!empty($_FILES)) {
	
	require("imgClass.php");



	$img = $_FILES['img'];
	$ext = strtolower(substr($img['name'], -3));
	$allow_ext = array("jpg", "png", "gif");
	
	if(in_array($ext, $allow_ext)) 
	{
		move_uploaded_file($img['tmp_name'], "img/".$img['name']);	
		Img::creerMin("img/".$img['name'], "img/thumb", $img['name'], 215, 112);
		Img::convertToJpg("img/".$img['name']);
	}
	else
	{
		$error = "Votre fichier n'est pas au format désiré.";
	}

}

?>


<!doctype html>
<html>
<head>
	<title>Galerie Image</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="zoombox/zoombox.css" />
	<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
	<?php
	if (isset($error)) {
		echo $error;
	}

	 ?>
	<div id="container">
		<header id="header">
			<h1> Galerie d'image </h1>
		</header>
		<section>
			<form method="post" action="index.php" enctype="multipart/form-data">
				<input type="file" name="img"/>
				<input type="submit" name="Envoyer"/>
			</form>
			<ul>
			<?php
				$dos = "img/thumb";
				$dir = opendir($dos);
				while ($file = readdir($dir))
				{
					$allow_ext = array("jpg", "png", "gif");
					$ext = strtolower(substr($file, -3));
					if(in_array($ext, $allow_ext)) 
					{
						echo "<li>";
							echo "<a href='img/".$file."' class='zoombox zgallery1' >";
								echo "<img src='img/thumb/".$file." ' /> ";
								echo "<strong>".$file."</strong> ";
							echo "</a>";
						echo "</li>";
					}
				}
			?>
			</ul>
		</section>
		<footer id="footer">
			<h1> Footer </h1>
		</footer>
	</div>

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script type="text/javascript" src="zoombox/zoombox.js"></script>
	<script type="text/javascript" src="app.js"></script>
</body>
</html>