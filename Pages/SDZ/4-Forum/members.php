<html>
<head>
<title> Members </title>
<link rel="stylesheet" href="styles/style.css" type="text/css" />
<?php
    include ("DataBase/DBManager.php");
    include ("Manager/AuthorManager.php");
    include ("Model/Author.php");
    include ("Model/Post.php");
?>
</head>
<body>
    <div id="main"> 
    <?php include ("header.php"); ?>
    <?php include ("posting.php");?>
        <section>
            <?php            
               $authorMng = new AuthorManager();
               
               if ($authorMng->checkGetContent()) {
                   $author = new Author($_GET['author']);
                   echo "<h1>Voici les posts de <div class='h1Auhor'>". ucwords($author->_name)."</div></h1>";
                   $authorMng->printAllPosts($author);
                }
            ?>    
        </section> 
<!--    <?php include ("footer.php"); ?> -->
    </div>
</body>
</html>