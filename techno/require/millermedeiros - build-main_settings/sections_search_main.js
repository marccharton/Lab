//===== js/sections/search/main.js ======= //

//note that it also loads "sections/basicPage.js", it's better to a module list
//all it's dependencies and not require that any other code gets executed
//before.. you shouldn't rely on the `require` call inside "main.js" to provide
//everythign the page need, it will be easier to update later if page don't
//need the "sections/basicPage" module later or you decide to switch to
//a "sections/complePage-B"...
define(['jquery', 'sections/basicPage', 'foo', 'widgets/SearchInputField'], function($, basicPage, foo, SearchInputField){

    var _input;

    function init(){
        //initialize section
        basicPage.init();
        foo.doSomething();
        _input = new SearchInputField();
    }

    //... some other code would go here ...

    //API
    return {
        //all sections should have an init method
        init : init
    };
});