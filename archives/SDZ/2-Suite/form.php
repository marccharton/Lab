<html>
<head>
<title> Mon titre </title>
</head>
<body>
    <p>
        Comment t'appelles tu mon petit?!
    </p>
    <form action="cible.php" method="post">
        <input type="text" name="pseudo"/>
        <select name="age">
            <option value="020"> 0 a 20 ans </option>
            <option value="2150"> 21 a 50 ans </option>
            <option value="5170"> 51 a 70 ans </option>
            <option value="7199"> 71 a 99 ans </option>
        </select>
        <br /><br />
        Situation :
        <br />
        <input type="checkbox" name="case1" id="case1" checked="checked"/> <label for="case1">Etudiant</label> <br />
        <input type="checkbox" name="case2" id="case2"/> <label for="case2">Chomeur</label> <br />
        <input type="checkbox" name="case3" id="case3"/> <label for="case3">Actif</label> <br />
        <input type="checkbox" name="case4" id="case4"/> <label for="case4">Boulanger</label> <br />
        <br /><br />
        Vous etes : <br />
        <input type="radio" name="sexe" value="f" id="f" checked="checked"/> <label for="f">Une Femme</label><br />
        <input type="radio" name="sexe" value="m" id="m"/> <label for="m">Un Homme</label><br />
        
        
        
        
        
        <input type="submit" value="Alors tu cliques ou pas?!?">
    </form>
</body>
</html>
