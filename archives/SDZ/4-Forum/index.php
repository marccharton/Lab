<html>
<head>
<title> PHP OBJET </title>
<link rel="stylesheet" href="styles/style.css" type="text/css" />
<?php
    include ("DataBase/DBManager.php");
    include ("Manager/PostManager.php");
    include ("Model/Post.php");
?>
</head>
<body>
    <div id="main"> 
    <?php include ("header.php"); ?>
    <?php include ("posting.php");?>
        <section>
            <?php            
               $db = DBManager::getInstance();
               $postMng = new PostManager();
               
               if ($postMng->checkPostContent()) {
                    $postMng->addPost($_POST['post_msg'], $_POST['post_name']);
                    unset($_POST);
                }
                $postMng->printAllPosts();
            ?>    
        </section> 
    <!--    <?php include ("footer.php"); ?> -->
    </div>
</body>
</html>