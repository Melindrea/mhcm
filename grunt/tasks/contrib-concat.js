module.exports = function(grunt) {
    'use strict';

    grunt.config('concat', {
        options: {
            // define a string to put between each file in the concatenated output
            separator: ';'
        },
        head: {
            // the files to concatenate
            src: [
                '<%= directories.flatBuild.js %>/vendor/modernizr.dev.js'
            ],
            // the location of the resulting JS file
            dest: '<%= directories.flatBuild.build %>/assets/scripts/head.max.js'
        },
        main: {
            // the files to concatenate
            src: [
                '<%= directories.flatBuild.base %>/bower_components/jquery/dist/jquery.js',
                '<%= directories.flatBuild.base %>/bower_components/magnific-popup/dist/jquery.magnific-popup.js',
                '<%= directories.flatBuild.base %>/bower_components/showdown/src/showdown.js',
                '<%= directories.flatBuild.base %>/bower_components/momentjs/moment.js',
                '<%= directories.flatBuild.js %>/main.js',
                '<%= directories.flatBuild.js %>/lightbox.js',
            ],
            // the location of the resulting JS file
            dest: '<%= directories.flatBuild.build %>/assets/scripts/main.max.js'
        }
    });
};
