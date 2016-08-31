<?php

require_once "lib/MathPlot.class.php";
require_once "lib/ScatterPlot.class.php";
	
if (isset($_GET['x'])) {
    if ($_GET['x'] == 1)
        nb1();
    else if ($_GET['x'] == 2)
        nb2();
    else if ($_GET['x'] == 3)
        nb3();
    else if ($_GET['x'] == 4)
        nb4();
}
    
function CheckFile($file)
{
	$V = array();
	$p = array();
	$comment = fgets($file);
	$nbV = intval(fgets($file));
	for ($i = 0; $i < $nbV; ++$i) {
            $V[] = floatval(fgets($file));
        }
	$str = fgets($file);
	$nb = intval(fgets($file));
	for ($i = 0; $i < $nb; ++$i) {
            $p[] = str_word_count(fgets($file), 1, "0123456789.-");
            $p[$i][0] = floatval($p[$i][0]);
            $p[$i][1] = floatval($p[$i][1]);
	}
        $s = 1;
	while($s) {
            $s = 0;
            $i = 0;
            while (isset($p[$i + 1])) {
                if ($p[$i][0] > $p[$i + 1][0]) {
                    $tmp = $p[$i];
                    $p[$i] = $p[$i + 1];
                    $p[$i + 1] = $tmp;
                    $s = 1;
                }
                $i++;
            }
	}
	$_GET['nbPoint'] = $nb;
	$_GET['node'] = $V;
	$_GET['nbNode'] = $nbV;
	$_GET['Point'] = $p;
}

function nb1() {
    $graph = new Graph(600, 450);
    $graph->setAntiAliasing(TRUE);

    $file = fopen("309test1.txt", "r");
    if ($file)
      {
	CheckFile($file);
        fclose($file);
        $plot = new MathPlot(0, 5, 1, 0);
	$plot->setInterval(0.05);
	$func = array();
	$GLOBALS['node'] = $_GET['node'];
	for ($i = 0; $i<= 4; $i++) {
            $func[] = new MathFunction('printCurve' . ($i + 1));
            $func[$i]->setColor(new Color(rand(0, 255),rand(0, 255),rand(0, 255)));
            $plot->add($func[$i]);
        }
        $plot->setPadding(30, 30, 30, 30);
        $plot->setBackgroundColor(new Color(200, 230, 230));
        $graph->add($plot);
	$graph->draw();
    }
}

function nb2() {
    $graph = new Graph(600, 450);
    $graph->setAntiAliasing(TRUE);
    $file = fopen("309test1.txt", "r");
    if ($file)
    {
	CheckFile($file);
	$nbP = $_GET['nbPoint'];
	$V = $_GET['node'];
	$nbV = $_GET['nbNode'];
	$p = $_GET['Point'];
	$v = array();
	$x = array();
	$group = new PlotGroup();
	for ($i = 0; $i < $nbP; ++$i) {
            $v[] = $p[$i][1];
            $x[] = $p[$i][0];
	}
	$plot2 = new ScatterPlot($v, $x);
	$plot2->link(true);
	$plot2->setColor(new Color(200, 0, 0));
	$plot2->setYAxis(Plot::LEFT);
	$group->add($plot2);
	$v = array();
	$xval = array();
	for ($x = -1; $x <= 4; $x += 0.05) {
            $tmp = 0;
            $tmp2 = 0;
            for ($param = 0; $param < $nbP; $param++) {
                $tmp += calcFormula($param, 3, $x, $V) * $p[$param][1];
                $tmp2 += calcFormula($param, 3, $x, $V) * $p[$param][0];
            }
            if ($tmp2 != 0) {
                $v[] = $tmp;
                $xval[] = $tmp2;
            }
	}
	$plot2 = new ScatterPlot($v, $xval);
	$plot2->link(true);
	$plot2->setColor(new Color(0, 0, 200));
	$group->add($plot2);
	$v = array();
	$xval = array();
	for ($x = -1, $i = 0; $x <= 4; $x += 0.05) {
            $div = 0;
            $tmp = 0;
            $tmp2 = 0;
            for ($param = 0; $param < $nbP; $param++) {
                    $div += calcFormula($param, 3, $x, $V) * $p[$param][2];
                    $tmp += calcFormula($param, 3, $x, $V) * $p[$param][1] * $p[$param][2];
                    $tmp2 += calcFormula($param, 3, $x, $V) * $p[$param][0] * $p[$param][2];
            }
            $tmp = ($div == 0) ? 0 : $tmp / $div;
            $tmp2 = ($div == 0) ? 0 : $tmp2 / $div;
            if ($tmp2){
                $v[$i] = $tmp;
                $xval[$i++] = $tmp2;
            }
	}
	$plot2 = new ScatterPlot($v, $xval);
	$plot2->link(true);
	$plot2->setColor(new Color(100, 200, 10));
	$group->add($plot2);
	$graph->add($group);				
	$graph->draw();
	fclose($file);
    }
}

function nb3() {
    $graph = new Graph(600, 450);
    $file = fopen("309test2.txt", "r");
    if ($file)
    {
	CheckFile($file);
	if ($_GET['nbNode'] != 9) {
		$plot = new MathPlot(0, 1, 1, 0);
		$plot->setInterval(0.01);
	}
	else {
		$plot = new MathPlot(0, 5, 1, 0);
		$plot->setInterval(0.05);
	}
	
	$func = array();
	$GLOBALS['node'] = $_GET['node'];
	for ($i = 0; $i<= 4; $i++) {
            $func[] = new MathFunction('printCurve' . ($i + 1));
            $func[$i]->setColor(new Color(rand(0, 255),rand(0, 255),rand(0, 255)));
            $plot->add($func[$i]);
        }
	if ($_GET['nbNode'] == 10) {
		$func[] = new MathFunction('printCurve6');
		$func[5]->setColor(new Pink);
		$plot->add($func[5]);
	}
	$graph->add($plot);
        $plot->setPadding(30, 30, 30, 30);
        $plot->setBackgroundColor(new Color(200, 230, 230));
	$graph->draw();
	fclose($file);
    }
}

function nb4() {
    $graph = new Graph(600, 450);
    $graph->setAntiAliasing(TRUE);
    $file = fopen("309test2.txt", "r");
    if ($file)
    {
	CheckFile($file);
	$nbP = $_GET['nbPoint'];
	$V = $_GET['node'];
	$nbV = $_GET['nbNode'];
	$p = $_GET['Point'];
	$plot = new MathPlot(0, 2, 1, 0);
	$plot->setInterval(0.01);
	$plot->setBackgroundGradient(new LinearGradient(new Color(50, 50, 50), new Color(250, 250, 250), 0));
	$plot->setPadding(25, NULL, NULL, NULL);
	$v = array();
	$x = array();
	$group = new PlotGroup();
	for ($i = 0; $i < $nbP; ++$i) {
		$v[] = $p[$i][1];
		$x[] = $p[$i][0];
	}
	$plot2 = new ScatterPlot($v, $x);
	$group->add($plot2);
	$v = array();
	$xval = array();
	for ($x = -1; $x <= 4; $x += 0.05) {
		$tmp = 0;
		$tmp2 = 0;
		for ($param = 0; $param < $nbP; $param++) {
			$tmp += calcFormula($param, 3, $x, $V) * $p[$param][1];
			$tmp2 += calcFormula($param, 3, $x, $V) * $p[$param][0];
		}
		if ($tmp2 != 0) {
                    $v[] = $tmp;
                    $xval[] = $tmp2;
		}
	}
	$plot2 = new ScatterPlot($v, $xval);
	$plot2->link(true);
	$plot2->setColor(new Color(0, 0, 20));
	$group->add($plot2);	
	$v = array();
	$xval = array();
	for ($x = -1, $i = 0; $x <= 4; $x += 0.05) {
		$div = 0;
		$tmp = 0;
		$tmp2 = 0;
		for ($param = 0; $param < $nbP; $param++) {
			$div += calcFormula($param, 3, $x, $V) * $p[$param][2];
			$tmp += calcFormula($param, 3, $x, $V) * $p[$param][1] * $p[$param][2];
			$tmp2 += calcFormula($param, 3, $x, $V) * $p[$param][0] * $p[$param][2];
		}
		$tmp = ($div == 0) ? 0 : $tmp / $div;
		$tmp2 = ($div == 0) ? 0 : $tmp2 / $div;
		if ($tmp2){
		$v[$i] = $tmp;
		$xval[$i++] = $tmp2;}
	}
	$plot2 = new ScatterPlot($v, $xval);
	$plot2->link(true);
	$plot2->setColor(new Color(10, 100, 120));
	$group->add($plot2);
	$graph->add($group);
	$graph->draw();
	fclose($file);
    }
}

function calcFormula($param, $degree, $x, $node)
{
    if ($degree != 0) {
        $tmp1 = 0;
        $tmp2 = 0;
        if (($node[$param + $degree] - $node[$param]) != 0) {
            $tmp1 = (($x - $node[$param]) / ($node[$param + $degree] - $node[$param]));
            $tmp1 *= calcFormula($param, $degree -1, $x, $node);
        }
        if (($node[$param + $degree + 1] - $node[$param + 1]) != 0) {
            $tmp2 = (($node[$param + $degree + 1] - $x) / ($node[$param + $degree + 1] - $node[$param + 1]));
            $tmp2 *= calcFormula($param + 1, $degree - 1, $x, $node);
        }
        $ret = $tmp1 + $tmp2;
        return $ret;
    }
    else {
        if ($x >= $node[$param])
            if ($x <= $node[$param + 1])
                return true;
    }
}
function printCurve1($x)
{
    $node = $GLOBALS['node'];
    return calcFormula(0, 3, $x, $node);
}
function printCurve2($x)
{
    $node = $GLOBALS['node'];
    return calcFormula(1, 3, $x, $node);
}
function printCurve3($x)
{
    $node = $GLOBALS['node'];
    return calcFormula(2, 3, $x, $node);
}
function printCurve4($x)
{
    $node = $GLOBALS['node'];
    return calcFormula(3, 3, $x, $node);
}
function printCurve5($x)
{
    $node = $GLOBALS['node'];
    return calcFormula(4, 3, $x, $node);
}
function printCurve6($x)
{
    $node = $GLOBALS['node'];
    return calcFormula(5, 3, $x, $node);
}
?>

