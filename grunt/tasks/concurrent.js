module.exports = function(grunt) {
    'use strict';

    grunt.config('concurrent', {
        'lint': ['lint:scripts', 'lint:json'],
        'build': ['build:scripts', 'build:html']
    });
};
