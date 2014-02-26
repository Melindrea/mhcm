module.exports = function(grunt) {
    'use strict';

    grunt.config('prettify', {
        options: {
            config: '.prettifyrc'
        },
        // Prettify a directory of files
        all: {
            expand: true,
            cwd: '<%= directories.flatBuild.build %>/',
            ext: '.html',
            src: ['{,*/}*.html'],
            dest: '<%= directories.flatBuild.build %>/'
        }
    });
};
