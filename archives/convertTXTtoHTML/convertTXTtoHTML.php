<?php
function str($str) {
	echo $str . "\n";
}
?>

<!-- Header (title + css) -->
<?php

str("<html>") ;
str("<head>") ;

str("<style>") ;

str("
body {
	background: #DB4;
	padding: 30px;
}
") ;

str("
.container { 
	width:90%;
	max-width:800px;
	margin:auto;
	text-align:justify;
	font-family:'Helvetica';
	background: #8BD;
	padding: 30px;
	border-radius: 10px;
	border: 2px black solid;
	box-shadow: black 3px 3px 20px;
}
") ;

str("
.fileInfo { 
	text-align:right;
	border: 2px black dotted;
	padding:10px;
	margin-bottom: 20px;
}
") ;


str("</style>") ;

?>

<?php
str("<body>") ;

str("<div class='container'>") ;

	if ($_FILES["file"]["error"] > 0)
	{
	  echo "Error: " . $_FILES["file"]["error"] . "<br />";
	}
	else
	{
		echo "<div class='fileInfo' >";
			echo "Upload: " . $_FILES["file"]["name"] . "<br />";
			echo "Type: " . $_FILES["file"]["type"] . "<br />";
			echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br />";
			echo "Stored in: " . $_FILES["file"]["tmp_name"] . " <br />";
		echo "</div>";
	}
	
	
	str("<title> Read : ") ;
	str($_FILES["file"]["name"] );
	str("</title>") ;
	
	if (!$file =  fopen($_FILES["file"]["tmp_name"], "r+"))
	{
		echo "Error Open";
		exit;
	}
	
	$page = "";
	while ( !feof($file) ) 
	{ 
		$page .= fgets($file, 4096); 
	}

	$pageWithSpace = str_replace ( "\t", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" , $page);
	$pageWithBR = str_replace ( "\n", "<br />\n" ,  $pageWithSpace);
	
	
	
	
	str($pageWithBR);
	
	
	?>
	
	<br /><br /><br />
	<a href="convertTXTtoHTMLIndex.php"> Retour sur l'upload </a>
	
	<?php
	
	str("</div>") ;

str("</body>") ;

str("</head>") ;
str("</html>");

?>