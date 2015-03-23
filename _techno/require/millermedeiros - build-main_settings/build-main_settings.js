({
    //settings for the r.js optimizer
    baseUrl : '../js',
    name : 'main',
    out : '../deploy/js/main-v2.js', //here you can set the versioning
    excludes : [
        //so we can load those modules only when needed, also to make sure
        //individual versioning of sections also work as expected.
        'sections/search/main',
        'sections/news/main',
        //if you want to version jquery using the paths config it shouldn't be
        //included by any module...
        'jquery'
    ],
    includes : [
        //everything that is shared across multiple pages and may not be on the
        //dependency list of any module loaded directly by main.js
        'sections/simplePage',
        'some/dynamic/module'
    ]
})