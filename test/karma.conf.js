module.exports = function karmaConfig(config) {
    config.set({

        // The base path is one level up since this file is in ./test/
        // If your karma.conf.js is in your project root, your basePath should
        // be './'
        basePath: '../',

        frameworks: ['jspm', 'jasmine'],

        jspm: {
            loadFiles: [
                'test/unit/**/*.js',
            ],
            serveFiles: [
                'src/**/*.js',
                'src/**/*.css',
                'src/**/*.html',
            ],
        },

        preprocessors: {
            'src/**/*.js': ['babel'],
            'test/unit/**/*.js': ['babel'],
            'jspm_packages/apsis/**/*.js': ['babel'],
        },

        babelPreprocessor: {
            options: {
                sourceMap: 'inline',
            },
        },

        proxies: {
            '/test/': '/base/test/',
            '/src/': '/base/src/',
            '/jspm_packages/': '/base/jspm_packages/',
        },

        browsers: ['PhantomJS'],

        reporters: ['dots', 'osx'],

        colors: true,

        exclude: [],

        logLevel: config.LOG_ERROR,

    });
};
