module.exports = function(grunt) {
    'use strict';

    grunt.config('concurrent', {
        'lint': ['lint:scripts', 'lint:json'],
        'lint2': ['lint:css', 'lint:php'],
        'build': ['build:scripts', 'build:images'],
        'build2': ['build:html'],
        'build3': ['build:css', 'build:fonts'],
        'test': ['test:mocha', 'test:phpunit']
    });
};
