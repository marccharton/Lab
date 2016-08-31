<?php
    setcookie('pseudo', 'kram47', time() + 60, null, null, false, true);
?>

<html>
<head>
    <title> titre </title>
</head>
<body>
    <?php
        echo "Your nickname is " . $_COOKIE['pseudo'] . "<br />";
        if(isset($_ENV))
            {
                echo "<br />\$_ENV : <br />";
                foreach($_ENV as $cle => $element)
                {
                    echo '[' . $cle . '] vaut ' . $element . '<br />';
                }
            }
        if(isset($_SERVER))
            {
                echo "<br />\$_SERVER : <br />";
                foreach($_SERVER as $cle => $element)
                {
                    echo '[' . $cle . '] vaut ' . $element . '<br />';
                }
            }        
        if(isset($_SESSION))
            {
                echo "<br />\$_SESSION : <br />";
                foreach($_SESSION as $cle => $element)
                {
                    echo '[' . $cle . '] vaut ' . $element . '<br />';
                }
            }
        if(isset($_COOKIE))
            {
                echo "<br />\$_COOKIE : <br />";
                foreach($_COOKIE as $cle => $element)
                {
                    echo '[' . $cle . '] vaut ' . $element . '<br />';
                }
            }    
        if(isset($_FILES))
            {
                echo "<br />\$_FILES : <br />";
                foreach($_FILES as $cle => $element)
                {
                    echo '[' . $cle . '] vaut ' . $element . '<br />';
                }
            }
    ?>
</body>
</html>