<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of AuthorManager
 *
 * @author Marc
 */
class AuthorManager {
    public function checkGetContent() {
        if (!isset($_GET['author'])) 
            return false;
        else
            if ($_GET['author'] == "")
                return false;
        return true;
    }
    
    public function printAllPosts($author) {
        $query = DBManager::getInstance()->_db->query("SELECT * FROM `posts` WHERE postMan LIKE '%".$author->_name."' ORDER BY id DESC");
        
        while ($row = $query->fetch(PDO::FETCH_ASSOC))
        {
            $post = new Post($row['id'], $row['postMan'], $row['post'], $row['date']);
            $post->toString();
        }
    }
}

?>
