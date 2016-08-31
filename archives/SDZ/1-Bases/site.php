<html>
<head>
</head>
<body>           
           <?php include("menu.php");?>
           <div id="corps">
                      <h1>Mon super site</h1>
                      <p>
                                 Bienvenue sur mon super site !<br />
                                 Vous allez adorer ici, c'est un site génial qui va parler de... heu... Je cherche encore un peu le thème de mon site :-D
                      </p>
           </div>
           <div id="php">
                      <?php
                                 $date = array(date('d'), date('m'), date('y'), date('H'), date('i'));
                                 
                                 echo "Nous sommes le $date[0]/$date[1]/$date[2] et il est $date[3]:$date[4]";
                                 
                                 echo "<br />Voyons un autre exemple....<br />";
                                 for($i = 0; $i < 10; $i++)
                                            echo "<br />";
                                 $tab = array (
                                            'prenom' => 'marc',
                                            'nom' => 'CHARTON',
                                            'pseudo' => 'Kram47'
                                 );
                                 
                                 foreach($tab as $cle=>$plop)
                                 {
                                            echo 'tab[\'' . $cle . '\'] = ' . $plop . '<br>';
                                 }
                                 echo '<pre>';
                                 print_r($tab);
                                 echo '</pre>';
                                 $position = array_search(8, $date);
                                 echo "<br> $position";
                                 echo '<br />' . $date;
                                 

                      ?>
           </div>
</body>
</html>