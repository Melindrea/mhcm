module.exports = function(grunt) {
    'use strict';

    grunt.config('csscss', {
        options: {
            verbose: true
        },
        dist: {
            src: ['<%= directories.flatBuild.build %>/assets/styles/main.css']
        }
    });
};
