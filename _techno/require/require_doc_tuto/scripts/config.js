require.config({
    paths: {
        'jQuery': '../libs/jquery',
        'test': 'helper/test',
        'util': 'helper/util',
        'app' : 'app'
    },
    shim: {
        'jQuery': {
            exports: '$'
        }
    }
});

require(['main']);