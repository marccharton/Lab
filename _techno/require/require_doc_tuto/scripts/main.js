define('main', ['test', 'util', 'jquery'], function(pTest, pUtil, $){
    alert("debut");

    var test = new pTest();
    var util = new pUtil();

    console.log(test.getName());
    console.log(util.getTestName());

    console.log("test.getName() === util.getTestName() : ");
    console.log(test.getName() === util.getTestName());

    console.log('jQuery version:', $.fn.jquery);

    alert("Bravo tout a fonctionné !");
});