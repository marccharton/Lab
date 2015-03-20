// module "module1"
define('init_module', [
    'jquery', // si on a besoin de jQuery
    'module1' // inclusion du module
], function($, module1) {
 
    // private scope
    console.log('init loaded');
 
    console.log(module1.nombre); // 88
    module1.nombre_plus();
    console.log(module1.nombre); // 89
 
    return module1;
});
 
// chargement du module
require(['init_module'], function(module1) {
    // public scope
    console.log(module1.nombre); // 89
});