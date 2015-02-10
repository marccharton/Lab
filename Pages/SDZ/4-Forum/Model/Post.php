<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Post
 *
 * @author Marc
 */
class Post {
    public $_id;
    public $_author;
    public $_message;
    public $_date;
    
    public function __construct($id, $auth, $msg, $date) {
        $this->_id = $id;
        $this->_author = $auth;
        $this->_message = $msg;
        $this->_date = $date;
    }
    
    public function toString() {
        echo "<article>";
        echo "Post n&#176;" . $this->_id . ", par ";
        echo "<a href='members.php?author=". strtolower($this->_author) ."'>".$this->_author ."</a><br />";;
        echo "<div id=\"post_msg\"><pre>" . $this->_message . "</pre></div><br />";
        echo $this->_date . "<br />";
        echo "</article>";
    }
}

?>
