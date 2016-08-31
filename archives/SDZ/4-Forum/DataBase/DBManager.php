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
class DBManager {
    
    public $_db;
    public static $_DataBase;
    
    private function __construct() {
        $this->_db = new PDO('mysql:host=localhost;dbname=test', 'root', '');
    }
    
    public static function getInstance() {
        if (self::$_DataBase == NULL)
            self::$_DataBase = new DBManager();
        return self::$_DataBase;
    }
}

?>
