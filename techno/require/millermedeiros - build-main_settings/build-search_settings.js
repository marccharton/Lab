({
    //optimizing each module individually since we want to version each module
    //indivually, if no versioning required could optimize whole project at
    //once.
    baseUrl : '../js',
    name : 'sections/search/main',
    out : '../deploy/js/sections/search/main-v27.js', //here you can set the versioning
    excludes : [
        //simplePage was already included into main.js and it is loaded by all
        //pages..
        'sections/simplePage',
        //if you want to version jquery using the paths config it shouldn't be
        //included by any module...
        'jquery'
    ]
})