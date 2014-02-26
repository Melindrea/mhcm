module.exports = function(grunt) {
    'use strict';

    grunt.config('csscss', {
        options: {
            verbose: true
        },
        lint: {
            src: ['.tmp/main.css']
        }
    });
};
