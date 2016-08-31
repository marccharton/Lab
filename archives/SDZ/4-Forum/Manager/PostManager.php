<?php

/**
 * Description of PostManager
 *
 * @author Marc
 */

class PostManager {
    
    public $_posts;
    
    public function __construct() {
        $this->_posts = array();
    }

    public function getPostsRequest() {
        return DBManager::getInstance()->_db->query('SELECT * FROM  `posts` ORDER BY id DESC');
    }
    
    public function printAllPosts() {
        $query = $this->getPostsRequest();
        while ($row = $query->fetch(PDO::FETCH_ASSOC))
        {
            $post = new Post($row['id'], $row['postMan'], $row['post'], $row['date']);
            $post->toString();
            array_push($this->_posts, $post);
        }
    }
    
    public function addPost($post, $postMan) {
        $db = DBManager::getInstance();
        $stmt = $db->_db->prepare("INSERT INTO posts (post, postMan, date) VALUES (:post, :postMan, :date)");
        $stmt->bindParam(':post', $post);
        $stmt->bindParam(':postMan', $postMan);
        $stmt->bindParam(':date', date('Y-m-d', time()));
        $stmt->execute();
    }
    
    public function checkPostContent() {
        if (!isset($_POST['post_name'])) 
            return false;
        else
            if ($_POST['post_name'] == "")
                return false;
        if (!isset($_POST['post_msg']))
            return false;
        else
            if ($_POST['post_msg'] == "")
                return false;
        return true;
    }
}

?>
