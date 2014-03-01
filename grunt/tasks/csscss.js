module.exports = function(grunt) {
    'use strict';

    grunt.config('csscss', {
        options: {
            verbose: true,
            outputJson: true,
            failWhenDuplicates: true
        },
        lint: {
            src: ['.tmp/main.max.css']
        }
    });
};
