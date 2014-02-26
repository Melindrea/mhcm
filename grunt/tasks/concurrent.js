module.exports = function(grunt) {
    'use strict';

    grunt.config('concurrent', {
        options: {
            limit: 4
        },
        'lint': ['lint:scripts', 'lint:json', 'lint:css'],
        'build': ['build:scripts', 'build:html', 'build:css', 'build:fonts'],
        'test': ['test:mocha']
    });
};
