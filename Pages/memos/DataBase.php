<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of DataBase
 *
 * @author Marc
 */
class DataBase {
    
    public $_db;
    
    public function __construct() {
        $this->_db = new PDO('mysql:host=localhost;dbname=test', 'root', '');
    }
    
    public function addPost($post, $postMan) {
        $stmt = $this->_db->prepare("INSERT INTO posts (post, postMan, date) VALUES (:post, :postMan, :date)");
        $stmt->bindParam(':post', $post);
        $stmt->bindParam(':postMan', $postMan);
        $stmt->bindParam(':date', date('Y-m-d', time()));
        $stmt->execute();
    }
    
    public function getPostsRequest() {
        return $this->_db->query('SELECT * FROM  `posts` ORDER BY id DESC');
    }
}

?>
