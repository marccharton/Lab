<html>
<head>
<title> PHP OBJET </title>
<link rel="stylesheet" href="styles/style.css" type="text/css" />
<?php
    include ("DataBase.php");
    include ("Posts.php");
?>
</head>
<body>
    <div id="main"> 
    <?php include ("header.php"); ?>
        <section id="post">
            <form action="accessBdd.php" method="post">
                Votre Post : <textarea id="post_msg_ipt" name="post_msg" cols="60" rows="5" wrap="hard"></textarea> <br />
                Votre Nom : <input type="text" id="post_name_ipt" name="post_name"/> 
                <input type="submit" value="Valider" />
            </form>
        </section>
        <section>
            <?php            
               $db = new DataBase();
               $posts = new Posts();
               
               if ($posts->checkPostContent()) {
                    $db->addPost($_POST['post_msg'], $_POST['post_name']);
                    unset($_POST);
                }
                $query = $db->getPostsRequest();
                $posts->printAllPosts($query);
            ?>    
        </section> 
    <?php include ("footer.php"); ?>
    </div>
</body>
</html>