// ===== js/main.js ====== //

//other settings you may need:
require.config({
    //set everything besides the alias to versioned modules
});

define(['require', 'jquery', 'foo/bar'], function(require, $, bar){

    function init(){
        //"foo/bar" is used by all pages
        bar.init();
        loadPageDependencies();
    }

    function loadPageDependencies(){
        //assuming we have a [data-page] attr on the body
        var curPage = $.trim( $('body').data('page') );

        switch(curPage){
            case 'contact':
            case 'about':
                //in case you have many pages that load same dependencies just
                //create a module that contain everything you may need
                require(['sections/basicPage'], initSection);
                break;
            case 'search':
                //since search is very specific we create a module that contain
                //all the code that it needs.
                require(['sections/search/main'], initSection);
                break;
            case 'news':
                require(['sections/news/main'], initSection);
                break;
            case 'home':
                //I would probably create a new module "sections/home/main.js"
                // otherwise main.js can start growing too much, smaller
                // modules are easier to understand, done this way just as
                // example if you have some page that is very simple and don't
                // think it is worth the touble of creating a separate module
                // for it...
                require(['sections/basicPage', 'widgets/SlideShow', 'widgets/FancyMap'], function(basicPage, SlideShow, FancyMap){
                    basicPage.init();
                    Slideshow.build('.slideshow-container');
                    FancyMap.build('.map-container');
                });
                break;
        }

    }

    // it's better to manually call the init method that way we only start the
    // section if needed, if modules are optimized into a single file it would
    // cause conflicts since all the "define callbacks" will get executed.
    function initSection(section){
        section.init();
    }

    $(document).ready(init);
});