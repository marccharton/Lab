<?php
function str($str) {
	echo $str . "\n";
}
?>

<!-- Header (title + css) -->
<?php

str("<html>") ;
str("<head>") ;
str("<title>") ;
str("</title>") ;

str("<style>") ;

str("
body {
	background: #DB4;
	padding: 30px;
}
") ;

str("
.container { 
	width:700px;
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
.file-upload {
overflow: hidden;
display: inline-block;
vertical-align: middle;
gsposition: relative;
text-align: center;
color: white;
border: 2px solid #2FA2FF;
background: #6FBEFF;
-moz-border-radius: 8px;
-webkit-border-radius: 8px;
border-radius: 8px;
text-shadow: black 1px 1px 4px;
}
") ;



str("</style>") ;

?>

<?php
str("<body>") ;

str("<div class='container'>") ;

?>

<form action="convertTXTtoHTML.php" method="post" enctype="multipart/form-data">
	<label for="file">Filename:</label>
	<input type="file" name="file" id="file" /> <br />
	<input type="submit" name="submit" value="Submit" />
</form>


<div class="file-upload-btn">
	<label for="file-upload-1">Upload file</label>
	<input id="file-upload-1" type="file" name="uploaded" />
</div>

<?php
	
str("</div>") ;

str("</body>") ;

str("</head>") ;
str("</html>");

?>