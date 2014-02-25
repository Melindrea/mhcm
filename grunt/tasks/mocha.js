module.exports = function(grunt) {
    'use strict';

    grunt.config('mocha', {
        all: {
            options: {
                run: true,
                urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
            }
        }
    });
};
