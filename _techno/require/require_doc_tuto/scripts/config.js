requirejs.config({
    paths: {
        'jquery': '../libs/jquery',
        'test': 'helper/test',
        'util': 'helper/util',
        'app' : 'app'
    },
    shim: {
        // cette partie est optionnelle si le nom est 'jquery'
        'jquery': {
            exports: '$'
        }
    }
});

requirejs(['main']);