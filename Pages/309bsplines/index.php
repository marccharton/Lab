<!DOCTYPE html>
<html>
<head>
	<style>
	    body {
            background: url("bw.png") 100%;
        }
            body {
		font-size: 1.5em;
	}
	.main {
		padding: 20px;
		margin: auto;
		margin-top: 300px;
		width: 450px;
		height: 200px;
		background-color: lightgrey;
		border: 2px solid black;
		border-radius: 5px;
		text-align: center;
		line-height: 2em;
		
	}	
	.fileLink {
		text-decoration: none;
		color: black;
                font-size: 25px;
	}
	.fileLink:hover {
		font-size: 2em;
	}
	</style>
</head>
<body>
<a href="accueil.php"> Voir tous les fichiers </a> <br />	
    <div class="main">
		<a class="fileLink" href="309bsplines.php?x=1"> Fichier 1 option 1 </a> <br />
		<a class="fileLink" href="309bsplines.php?x=2"> Fichier 1 option 2 </a> <br />
		<a class="fileLink" href="309bsplines.php?x=3"> Fichier 2 option 1 </a> <br />
		<a class="fileLink" href="309bsplines.php?x=4"> Fichier 2 option 2 </a> <br />
	</div>
</body>
</html>