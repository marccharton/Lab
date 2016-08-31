<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Posts
 *
 * @author Marc
 */
class Posts {
    
    public function printAllPosts($query) {
        while ($row = $query->fetch(PDO::FETCH_ASSOC))
        {
            echo "<article>";
            echo "Post n&#176;" . $row['id'] . ", par <b>";
            echo $row['postMan'] . "</b><br />";;
            echo "<div id=\"post_msg\"><pre>" . $row['post'] . "</pre></div><br />";
            echo $row['date'] . "<br />";
            echo "</article>";
        }
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
