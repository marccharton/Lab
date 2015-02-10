<?php
/**
 * Description of Author
 *
 * @author Marc
 */
class Author {
    public $_name;
    public $_posts;
    
    public function __construct($name) {
        $this->_name = $name;
    }
    
    public function toString() {
        echo "Salut je m'appelle " . $this->_name . " !";
    }
}

?>
